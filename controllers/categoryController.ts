"use strict";

import { Request, Response, NextFunction } from "express";

import { CategoryController } from '../types'

export const categoryController:CategoryController = {

  /**
   * Retrieve list of categories associated with user
   * @param req { uid: Number }
   * @param res { JSON: array of categories belonging to the user }
   * @param next 
   */
  getCategories: (req: Request, res: Response, next: NextFunction):void => {
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
   * Enables user to add new category of items to their profile
   * @param req  { uid: Number, category: <category_to_add>}
   * @param res { 201 Created }
   * @param next 
   */
  addCategory: (req: Request, res: Response, next: NextFunction):void => {
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
   * Enables user to delete a category to their profile
   * @param req { uid: Number, category: <category_id> }
   * @param res { 204 OK No response }
   * @param next 
   */
  deleteCategory: (req: Request, res: Response, next: NextFunction) => {
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
};