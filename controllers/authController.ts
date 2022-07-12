"use strict";

import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { AuthController } from '../types';
import jwt from 'jsonwebtoken';

import { db } from '../models';

export const authController:AuthController = {
  /**
   * @param req { email: String, password: String }
   * @param res { 200 OK or 401 Unauthorized}
   * @param next 
   */
  signIn: async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {  
      if (req.body.email && req.body.password) {
        const values:Array<String> = [req.body.email.toLowerCase(), req.body.password];
        const query:String = 'SELECT email, display_name FROM accounts WHERE lower(email) = $1 and password = $2';
        
        const results:Promise<QueryResult> = db.query(query, values, null);

        const email = (await results).rows[0].email;
        const display_name = (await results).rows[0].display_name;

        res.locals.user = { display_name: display_name, email: email};

        return next();
      } else {
        return next({
          log: 'Missing email or password field',
          status: 400,
          message: 'Missing email or password field'
        })
      }
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

  signOut:  (req: Request, res: Response, next: NextFunction): void => {
    try {
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

  signUp: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const values = [req.body.email, req.body.password];
      const query:String = 'INSERT INTO accounts (email, password) VALUES ($1, $2)';
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
  }
};