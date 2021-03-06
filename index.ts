"use strict";

import express, { Request, Response, Application, NextFunction, RequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import {get} from 'lodash';
import axios from 'axios';
import jwt from 'jsonwebtoken';
const querystring = require('querystring');

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
  return res.json({ success: true });
});

/**
 * Sign out route
 */
app.get('/signOut', authController.signOut, (req: Request, res: Response):Response => {
  return res.sendStatus(200);
});
/**
 * Get user displayname
 */
 app.get('/profile', authController.getUserId,authController.getDisplayname, (req: Request, res: Response):Response => {
  return res.sendStatus(200).json(res.locals.display_name);
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
  return res.json(res.locals.items);
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
 * Helper and Route for GitHub OAuth
 */
 const getGitHubUser = async ({code}: {code: String}):Promise<any> => {
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`;

    const gitHubToken = await axios
      .post(url)
      .then((res) => res.data)

      .catch((error) => {
        throw Error
      });

    console.log(gitHubToken)

    const decoded = querystring.parse(gitHubToken);
    console.log(decoded)

    const accessToken = decoded.access_token;
    console.log(accessToken)

    return axios
    .get('https://api.github.com/user', {
      headers: {Authorization: `Bearer ${accessToken}`}
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Error retrieving user from GitHub')
      throw error
    })
  };

 app.get('/auth', async (req: Request, res: Response):Promise<void> => {
  const code = get(req, 'query.code');
  const path = get(req, 'query.path', '/');
  if (!code) throw new Error ('no code');

  try {
    const gitHubUser = await getGitHubUser({code});
    console.log(JSON.stringify(gitHubUser));

    const secret:String|undefined = process.env.JWT_TOKEN_SECRET;
    const token:String = jwt.sign(gitHubUser, secret as string);

    res.cookie("githubjwt", token, {
      httpOnly: true,
      domain: "localhost"
    })
    res.redirect(`http:localhost:3000/home`);
  }

  catch(err) {
    console.log(err)
  }
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