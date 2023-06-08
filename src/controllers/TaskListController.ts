import TaskListService from '../Services/TaskListService';
import { ICustomRequest, TPosition } from '../types/controllers';
import { TTaskListId } from '../types/data';
import { Request, Response } from 'express';

type TChangePosition = ICustomRequest<{
	start: TPosition;
	end: TPosition;
}>;

class TaskListController {
	async getColumn(req: ICustomRequest<unknown, { title: TTaskListId }>, res: Response) {
		const taskList = await TaskListService.getColumn(req.params.title);
		res.json(taskList);
	}

	async getAll(req: Request, res: Response) {
		const taskLists = await TaskListService.getAll();

		res.json(taskLists);
	}

	async changePosition(req: TChangePosition, res: Response) {
		const task = await TaskListService.changePosition(req.body.start, req.body.end);

		res.json(task);
	}
}

export default new TaskListController();
