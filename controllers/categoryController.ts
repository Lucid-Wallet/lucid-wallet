"use strict";

import { Request, Response, NextFunction } from "express";

export const categoryController = {

  /**
   * Retrieve list of categories associated with user
   * @param req { }
   * @param res { JSON: array of categories belonging to the user }
   * @param next 
   */
  getCategories: (req: Request, res: Response, next: NextFunction) => {

  },

  /**
   * Enables user to add new category of items to their profile
   * @param req  { category: <category_to_add>}
   * @param res { 201 Created }
   * @param next 
   */
  newCategory: (req: Request, res: Response, next: NextFunction) => {
    
  },

  /**
   * Enables user to delete a category to their profile
   * @param req { category: <category_id> }
   * @param res { 204 OK No response }
   * @param next 
   */
  deleteCategory: (req: Request, res: Response, next: NextFunction) => {

  },
};