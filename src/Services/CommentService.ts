import 'express-async-errors';
import { Comment } from '../models/commentModel';
import { Task } from '../models/taskModel';
import { IComment } from '../types/data';

class CommentService {
	create = async (comment: IComment, taskId: string) => {
		const newComment = await Comment.create(comment);
		await Task.updateOne({ _id: taskId }, { $push: { comments: newComment._id } });

		return newComment;
	};

	delete = async (id: string) => {
		const comment = await Comment.findByIdAndDelete(id);
		await Task.updateOne({ comments: id }, { $pull: { comments: id } });

		return comment;
	};
}

export default new CommentService();
