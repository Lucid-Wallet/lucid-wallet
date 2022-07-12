"use strict";

import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';

import { AuthController } from '../types';

const db = require('../models');

export const authController:AuthController = {
  /**
   * @param req { username: String, password: String }
   * @param res { 200 OK or 401 Unauthorized}
   * @param next 
   */
  signIn: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      
      if (req.body.username && req.body.password) {
        const values:Array<String> = [req.body.username.toLowerCase(), req.body.password];
        const query:String = 'SELECT user_id, username FROM accounts WHERE lower(username) = $1 and password = $2';
        
        const results:Promise<QueryResult> = db.query(query, values);

        const uid = (await results).rows[0].user_id;
        const username = (await results).rows[0].username;

        res.locals.user = { uid: uid, username: username };
        return next();
        
      } else {
        return next({
          log: 'Missing username or password field',
          status: 400,
          message: 'Missing username or password field'
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
      const values = [req.body.username, req.body.password, req.body.email];
      const query:String = 'INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3)';
      const results:Promise<QueryResult> = await db.query(query, values);
      
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