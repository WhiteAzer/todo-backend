import TaskService from '../Services/TaskService';
import { Response } from 'express';
import { ICustomRequest, IRequestWithId, ITaskRequest } from '../types/controllers';
import { ITask, TTaskListId } from '../types/data';
import { ObjectId } from 'mongoose';

class TaskController {
	async create(
		req: ICustomRequest<Omit<ITask, 'comments'> & { target: TTaskListId }>,
		res: Response
	) {
		const { title, description, tags, target } = req.body;
		const task = await TaskService.create({ title, description, tags }, target);

		res.json(task);
	}

	async getOne(req: IRequestWithId, res: Response) {
		const task = await TaskService.getOne(req.params.id);

		res.json(task);
	}

	async update(req: ITaskRequest<{ _id: ObjectId }>, res: Response) {
		const task = await TaskService.update(req.body);

		res.json(task);
	}

	async delete(req: IRequestWithId, res: Response) {
		const task = await TaskService.delete(req.params.id);

		res.json(task);
	}
}

export default new TaskController();
