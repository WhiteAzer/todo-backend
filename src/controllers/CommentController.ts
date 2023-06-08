import CommentService from '../Services/CommentService';
import { Response } from 'express';
import { ICustomRequest, IRequestWithId } from '../types/controllers';
import { IComment } from '../types/data';

export interface ICreateRequest extends IComment {
	taskId: string;
}

class CommentController {
	async create(req: ICustomRequest<ICreateRequest>, res: Response) {
		const { author, text, taskId } = req.body;
		const comment = await CommentService.create({ author, text }, taskId);

		res.json({
			comment,
			taskId,
		});
	}

	async delete(req: IRequestWithId, res: Response) {
		const task = await CommentService.delete(req.params.id);

		res.json(task);
	}
}

export default new CommentController();
