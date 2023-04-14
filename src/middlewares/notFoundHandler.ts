import createError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

export const notFoundHandler = async (req: Request, res: Response, next: NextFunction) => {
	next(createError(404));
};
