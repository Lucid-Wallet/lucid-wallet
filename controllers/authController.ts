"use strict";

import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import jwt from 'jsonwebtoken';

import { AuthController } from '../types';
import { db } from '../models';
const fs = require('fs');


export const authController:AuthController = {
  /**
   * @param req { email: String, password: String }
   * @param res { 200 OK or 401 Unauthorized}
   * @param next 
   */
  signIn: async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
      console.log('Process env ', );
      if (req.body.email && req.body.password) {
        // Get user information from database
        const values:Array<String> = [req.body.email.toLowerCase(), req.body.password];
        const query:String = 'SELECT user_id, email, display_name FROM accounts WHERE lower(email) = $1 and password = $2';
        
        const results:Promise<QueryResult> = db.query(query, values, null);

        const user_id = (await results).rows[0].user_id;
        const email = (await results).rows[0].email;
        const display_name = (await results).rows[0].display_name;

        const user:{user_id:Number} = {user_id:user_id};
        res.locals.user = { display_name: display_name, email: email};

        // On successful login assign valid session to user
        const jwtToken:string = jwt.sign(user, process.env.JWT_TOKEN_SECRET as string);
        res.cookie('jwt', jwtToken, { path: '/', httpOnly: true });

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
        log: 'Error accessing database',
        status: 400,
        message: {err}
      });
    }
  },

  /**
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns 
   */
  signOut: (req: Request, res: Response, next: NextFunction): void => {
    try {
      console.log("before ", req.cookies);
      res.clearCookie('jwt', { path: '/'});
      console.log("after ", req.cookies);
      return next();
    }
    catch(err){
      console.log(err);
      
      return next({
        log: 'Error signing out',
        status: 400,
        message: {err}
      });
    }
  },

  signUp: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const currentTime:Date = new Date();
      let timestamp = currentTime.getUTCFullYear() + '-' +
      ('00' + (currentTime.getUTCMonth()+1)).slice(-2) + '-' +
      ('00' + currentTime.getUTCDate()).slice(-2) + ' ' + 
      ('00' + currentTime.getUTCHours()).slice(-2) + ':' + 
      ('00' + currentTime.getUTCMinutes()).slice(-2) + ':' + 
      ('00' + currentTime.getUTCSeconds()).slice(-2);

      const values:String[] = [req.body.email, req.body.display_name, req.body.password, timestamp];
      const query:String = 'INSERT INTO accounts (email, display_name, password, created_at) VALUES ($1, $2, $3, $4)';
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
  },

  getUserId: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const jwtToken = req.cookies.jwt;
      
      jwt.verify(jwtToken, process.env.JWT_TOKEN_SECRET as string, (err: any, data: any) => {
        res.locals.user_id = data.user_id;
      });
      
      return next();
    }
    catch (err) {
      console.log(err)
      return next({
        log: 'Error saving to database',
        status: 400,
        message: {err}
      });
    }
  },
};