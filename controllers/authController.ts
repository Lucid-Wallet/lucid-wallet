"use strict";

import { Request, Response, NextFunction } from 'express';

export const authController = {
  signIn: (req: Request, res: Response, next: NextFunction): void => {
    return next();
  },

  signUp: (req: Request, res: Response, next: NextFunction): void => {
    return next();
  }
};