"use strict";

import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { db } from "../models";

export const budgetController = {
  /**
     * Add budget on user Sign-Up and edit
     * @param req { uid: Number, category: <category_id>, item: <item_name> }
     * @param res { 201 Created }
     * @param next 
     */
  postInitialBudget: async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    let uid: Number | undefined ;
    const jwtToken = req.cookies.jwt;
    jwt.verify(jwtToken, process.env.JWT_TOKEN_SECRET as string, (err: any, data: any) => {
    uid = data.user_id;
    });

    try {
      const values:String[] = [String(req.body.income), String(req.body.housing), String(req.body.utilities), String(req.body.bills_other), String(req.body.groceries), String(req.body.car), String(req.body.gas), String(uid)]
      const query:String = 'UPDATE accounts SET (income = $1, housing = $2, utilities = $3, bills_other = $4, groceries = $5, car = $6, gas = $7) WHERE user_id = $8'
      
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
   * Retrive budget info on landing page
   * @param req { uid: Number, category: <category_id>, item: <item_name> }
   * @param res { 201 Created }
   * @param next 
   */
  retrieveBudget: (req: Request, res: Response, next: NextFunction):void => {
    try {
      const query:String = ''
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

  editBudget: (req: Request, res: Response, next: NextFunction): void => {
    try {
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