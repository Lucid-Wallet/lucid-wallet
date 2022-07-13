"use strict";

import { Request, Response, NextFunction } from "express";

import { ItemController } from '../types';
import { QueryResult } from 'pg';

const db = require('../models');

export const itemController:ItemController = {

  /**
   * Retrieve list of item associated with user
   * @param req { }
   * @param res { JSON - array of items { 
   *              category_id: Number, item_id: Number, item: String, count: Number, pricePerItem: Number, Rating: Number, Note: String, VariableRate: Boolean}}
   * @param next 
   */
  getItems: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      const uid: Number | undefined = res.locals.user_id;
      const value:Array<string> = [ String(uid) ];
      const query:String = 'SELECT category_id, item_id, item, count, price_per, rating, note, variable_cost FROM items WHERE user_id =$1 ORDER BY created_at';
      const results:Promise<QueryResult> = await db.query(query, value);

      res.locals.items = (await results).rows;
      return next();
    }
    catch(err){
      console.log(err);
      return next({
        log: 'Error retrieving from database',
        status: 400,
        message: {err}
      });
    }
  },

  /**
   * Add item to user's list
   * @param req { uid: Number, category: <category_id>, item: <item_name> }
   * @param res { 201 Created }
   * @param next 
   */
  addItem: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      const uid: Number | undefined = res.locals.user_id;
      const values:String[] = [
        String(uid), 
        String(req.body.category_id), 
        req.body.name, 
        String(req.body.count), 
        String(req.body.price_per), 
        String(req.body.rating), 
        req.body.note, 
        String(req.body.variable_cost)
      ];

      const query:String = 'INSERT INTO items (user_id, category_id, name, count, price_per, rating, note, variable_cost) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
      
      const result:Promise<QueryResult> = await db.query(query, values);
      return next();
    }
    catch(err){
      console.log(err);
      return next({
        log: 'Error saving to database',
        status: 400,
        message: {err}
      });
    }
  },
  
  /**
   * Delete item from user's list
   * @param req { category: <category_id>, item: <item_id> }
   * @param res { 204 No response }
   * @param next 
   */
  deleteItem: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const uid: Number | undefined = res.locals.user_id;
      const value:Array<String> = [String(uid)];
      const query:String = 'DELETE FROM items WHERE item_id = $1';

      const results:Promise<QueryResult> = await db.query(query, value)
      return next();
    }
    catch(err){
      console.log(err);
      return next({
        log: 'Error deleting from database',
        status: 400,
        message: {err}
      });
    }
  }
};
