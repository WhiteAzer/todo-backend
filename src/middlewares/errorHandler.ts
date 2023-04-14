import { ErrorRequestHandler } from 'express';

export const errorHandlerMiddleware: ErrorRequestHandler = async (err, req, res) => {
	res.status(err.status || 500);
	res.json({
		status: err.status || 500,
		message: err.message,
		stack: err.stack,
	});
};
