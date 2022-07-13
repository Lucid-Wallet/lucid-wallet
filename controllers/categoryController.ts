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

      const categoryValues:String[] = [ uid, req.body.category];
      const getCategoryIDquery = 'SELECT category_id FROM categories WHERE user_id=$1 AND category=$2'
      const dbRes = await db.query(getCategoryIDquery, categoryValues, null);
      
      const category_id = dbRes.rows[0].category_id;
      
      const values:String[] = [ uid, category_id];

      const deleteItemsQuery = 'DELETE FROM items WHERE user_id = $1 AND category_id = $2'
      const query:String = 'DELETE FROM categories WHERE user_id = $1 AND category_id = $2';

      // delete items associated with category we are deleting
      await db.query(deleteItemsQuery, values, null);
      // delete the category
      await db.query(query, values, null)
      
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