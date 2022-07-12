"use strict";

import { Request, Response, NextFunction } from 'express';

export const authController = {
  signIn: (req: Request, res: Response, next: NextFunction): void => {
    console.log("HELLO")
    return next();
  },

  signUp: (req: Request, res: Response, next: NextFunction): void => {
    console.log("OUT")
    return next();
  }
};