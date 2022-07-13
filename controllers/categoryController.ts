"use strict";

import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { CategoryController } from '../types';
import { QueryResult } from 'pg';
import { db } from '../models';

export const categoryController:CategoryController = {

  /**
   * Retrieve list of categories associated with user
   * @param req { }
   * @param res { JSON: array of categories belonging to the user }
   * @param next 
   */
  getCategories: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

      const uid: Number | undefined = res.locals.user_id;
      
      const values:String[] = [ String(uid) ];
      console.log(uid);
      const query:String = 'SELECT category_id, category FROM categories WHERE user_id = $1';

      const results:Promise<QueryResult> = await db.query(query, values, null);
    
      res.locals.categories = (await results).rows;
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
   * Enables user to add new category of items to their profile
   * @param req  { uid: Number, category: <category_to_add>}
   * @param res { 201 Created }
   * @param next 
   */
  addCategory: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      const uid: Number | undefined = res.locals.user_id;

      const values:String[] = [String(uid), req.body.category];
      const query:String = 'INSERT INTO categories (user_id, category) VALUES ($1, $2)';

      const results = await db.query(query, values, null);
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
   * Enables user to delete a category to their profile
   * @param req { category: <category_id> }
   * @param res { 204 OK No response }
   * @param next 
   */
  deleteCategory: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      const uid: Number | undefined = res.locals.user_id;
      const values:String[] = [ uid, req.body.category_id];
      const query:String = 'DELETE FROM categories WHERE user_id = $1 AND category_id = $2';

      const results = db.query(query, values, null)
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
  },
};