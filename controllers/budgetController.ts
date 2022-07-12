"use strict";

import { Request, Response, NextFunction } from "express";

export const budgetController = {
  /**
     * Add budget on user Sign-Up and edit
     * @param req { uid: Number, category: <category_id>, item: <item_name> }
     * @param res { 201 Created }
     * @param next 
     */
  postInitialBudget: (req: Request, res: Response, next: NextFunction):void => {
    try {
      const query:String = ''
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