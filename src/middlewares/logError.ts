import { ErrorRequestHandler } from 'express';

export const logErrorMiddleware: ErrorRequestHandler = async (err, req, res, next) => {
	console.log('Error status: ', err.status || 500);
	console.log('Message: ', err.message);
	next(err);
};
