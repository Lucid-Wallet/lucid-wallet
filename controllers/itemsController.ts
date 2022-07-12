"use strict";

import { Request, Response, NextFunction } from "express";

export const itemsController = {

  /**
   * Retrieve list of item associated with user
   * @param req { }
   * @param res { JSON - array of items { category: <category_id>, item: <item_id>}}
   * @param next 
   */
  getItems: (req: Request, res: Response, next: NextFunction) => {
    
  },

  /**
   * Add item to user's list
   * @param req { category: <category_id>, item: <item_name> }
   * @param res { 201 Created }
   * @param next 
   */
  addItem: (req: Request, res: Response, next: NextFunction) => {

  },

  /**
   * Delete item from user's list
   * @param req { category: <category_id>, item: <item_id> }
   * @param res { 204 No response }
   * @param next 
   */
  deleteItem: (req: Request, res: Response, next: NextFunction) => {

  }
};
