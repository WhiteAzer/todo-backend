import CommentService from '../Services/CommentService';
import { Response } from 'express';
import { ICustomRequest, IRequestWithId } from '../types/controllers';
import { IComment } from '../types/data';

export interface ICreateRequest extends IComment {
	postId: string;
}

class CommentController {
	async create(req: ICustomRequest<ICreateRequest>, res: Response) {
		const { author, text, postId } = req.body;
		const comment = await CommentService.create({ author, text }, postId);

		res.json(comment);
	}

	async delete(req: IRequestWithId, res: Response) {
		const task = await CommentService.delete(req.params.id);

		res.json(task);
	}
}

export default new CommentController();
