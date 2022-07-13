"use strict";

import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { db } from "../models";
import { QueryResult } from 'pg';

export const budgetController = {
  /**
     * Add budget on user Sign-Up and edit
     * @param req { uid: Number, category: <category_id>, item: <item_name> }
     * @param res { 201 Created }
     * @param next 
     */
  postInitialBudget: async (req: Request, res: Response, next: NextFunction):Promise<void> => {

    try {      
      const uid: Number | undefined = res.locals.user_id;

      const values:String[] = [String(req.body.income), String(req.body.housing), String(req.body.utilities), String(req.body.bills_other), String(req.body.groceries), String(req.body.car), String(req.body.gas), String(uid)]
      const query:String = 'UPDATE accounts SET (income = $1, housing = $2, utilities = $3, bills_other = $4, groceries = $5, car = $6, gas = $7) WHERE user_id = $8'
      
      const results:Promise<QueryResult> = await db.query(query, values, null);
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
   * Retrive budget info on landing page
   * @param req { uid: Number, category: <category_id>, item: <item_name> }
   * @param res { 201 Created }
   * @param next 
   */
  retrieveBudget: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    
    try {
      const uid: Number | undefined = res.locals.user_id;
      
      const values:String[] = [String(uid)]
      const query:String = 'SELECT income, housing, utilities, bills_other, groceries, car, gas FROM accounts WHERE user_id = $1'

      const results:Promise<QueryResult> = await db.query(query, values, null);

      res.locals.budget = (await results).rows[0];
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

  editBudget: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const uid: Number | undefined = res.locals.user_id;
      
      const query:String = ''
      return next();
    }
    catch(err){
      console.log(err);
      return next({
        log: 'Error editing database',
        status: 400,
        message: {err}
      });
    }
  },
};