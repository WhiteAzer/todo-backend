import { TaskList } from '../models/taskListModel';
import createError from 'http-errors';
import 'express-async-errors';
import { TPosition } from '../types/controllers';
import { TTaskListId } from '../types/data';

class TaskListService {
	getColumn = async (title: TTaskListId) => await TaskList.find({ _id: title }).populate('data');

	async changePosition(start: TPosition, end: TPosition) {
		const column = await TaskList.findOne({ _id: start.title });
		const deletedTask = column.data.splice(start.index, 1)[0];

		if (!deletedTask) throw createError(400, 'Task not found');

		await TaskList.updateOne({ _id: start.title }, { $set: { data: column.data } });

		if (start.title !== end.title)
			await TaskList.updateOne({ _id: start.title }, { $pull: { data: null } });

		await TaskList.updateOne(
			{ _id: end.title },
			{ $push: { data: { $each: [deletedTask._id], $position: end.index } } }
		);

		return deletedTask;
	}
}

export default new TaskListService();
