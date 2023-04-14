import express from 'express';
import * as process from 'process';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRouter from './routrs/taskRouter';
import taskListRouter from './routrs/taskListRouter';
import { logErrorMiddleware } from './middlewares/logError';
import { errorHandlerMiddleware } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFoundHandler';
import CommentRouter from './routrs/commentRouter';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/api/task', taskRouter);
app.use('/api/taskList', taskListRouter);
app.use('/api/comment', CommentRouter);

app.use(notFoundHandler);
app.use(logErrorMiddleware);
app.use(errorHandlerMiddleware);

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		app.listen(PORT, () => console.log(`SERVER WAS STARTED ON PORT ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

startApp().catch(err => console.log(err));
