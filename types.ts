import { RequestHandler } from 'express';

export interface AuthController {
  signIn: RequestHandler,
  signOut: RequestHandler,
  signUp: RequestHandler
}

export interface CategoryController {
  getCategories: RequestHandler,
  addCategory: RequestHandler,
  deleteCategory: RequestHandler
}

export interface BudgetController {
  postInitialBudget: RequestHandler,
  retrieveBudget: RequestHandler,
  editBudget: RequestHandler
}

export interface ItemController {
  getItems: RequestHandler,
  addItem: RequestHandler,
  deleteItem: RequestHandler
}
