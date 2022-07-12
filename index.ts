"use strict";

import express, { Request, Response, Application, NextFunction, RequestHandler } from 'express';
import { authController } from './controllers/authController';

export interface authController {
  signIn: RequestHandler,
  signOut: RequestHandler
}

const app:Application = express();

const PORT:number = 8080;

app.get('/', (req: Request, res: Response):Response => {

  return res.send("Server");
});

/**
 * Sign in route
 */
app.post('/signIn', authController.signIn, (req: Request, res:Response):Response => {
  return res.sendStatus(200);
});

/**
 * Sign up route
 */
app.get('/signUp', authController.signUp, (req: Request, res: Response):Response => {
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