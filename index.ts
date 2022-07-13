"use strict";

import express, { Request, Response, Application, NextFunction, RequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

import { authController } from './controllers/authController';
import { categoryController } from './controllers/categoryController';
import { itemController } from './controllers/itemController';
import { budgetController } from './controllers/budgetController';
import { METHODS } from 'http';

const app:Application = express();

app.use(express.json());
app.use(cookieParser());

// enable cors for interaction with react front-end
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
}));

const PORT:number = 8080;

app.get('/', (req: Request, res: Response):Response => {

  return res.send("Server");
});

/**
 * Sign in route
 */
app.post('/signIn', authController.signIn, (req: Request, res:Response):Response => {
  return res.json(res.locals.user);
});

/**
 * Sign up route
 */
app.post('/signUp', authController.signUp, (req: Request, res: Response):Response => {
  return res.sendStatus(200);
});

/**
 * Sign out route
 */
app.get('/signOut', authController.signOut, (req: Request, res: Response):Response => {
  return res.sendStatus(200);
});

/**
 * Retrieve budget
 */
app.get('/budget', authController.getUserId, budgetController.retrieveBudget, (req: Request, res: Response): Response => {
  return res.sendStatus(200).json(res.locals.budget);
});

/**
 * Edit budget
 */
app.post('/budget', authController.getUserId, budgetController.editBudget, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
});

/**
 * Get all categories
 */
app.get('/category', authController.getUserId, categoryController.getCategories, (req: Request, res: Response): Response => {
  return res.json(res.locals.categories);
});

/**
 * Add a category
 */
app.post('/category', authController.getUserId, categoryController.addCategory, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
});

/**
 * Delete a category
 */
app.delete('/category', authController.getUserId, categoryController.deleteCategory, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
})

/**
 * Get all items
 */
app.get('/item', authController.getUserId, itemController.getItems, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
});

/**
 * Add an item
 */
app.post('/item', authController.getUserId, itemController.addItem, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
});

/**
 * Delete an item
 */
app.delete('/item', authController.getUserId, itemController.deleteItem, (req: Request, res: Response): Response => {
  return res.sendStatus(200);
});

/**
 * 404 Not found handler
 */
const notFoundHandler = (req: Request, res:Response, next:NextFunction):Response => {
  return res.sendStatus(404);
};

app.use(notFoundHandler);

/**
 * Global error event handler
 */

app.use((err: any, req: Request, res: Response, next: NextFunction):Response => {

  const defaultErr: { log: string, status: number, message: { err: string } } = {
    log: `Express error handler caught unknown middleware error ${err}`,
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, ():void => {
  console.log(`Listening on PORT ${PORT}`);
})