import { Task } from '../models/taskModel';
import { TaskList } from '../models/taskListModel';
import 'express-async-errors';
import { ITask, TTaskListId } from '../types/data';
import { ObjectId } from 'mongoose';

class TaskService {
	create = async (task: Omit<ITask, 'comments'>, target: TTaskListId) => {
		const newTask = await Task.create(task);
		await TaskList.updateOne({ _id: target }, { $push: { data: newTask._id } });

		return newTask;
	};

	getOne = async (id: string) => await Task.findById(id).populate('comments');

	update = async (task: ITask & { _id: ObjectId }) =>
		Task.findByIdAndUpdate(
			task._id,
			{ title: task.title, description: task.description, tags: task.tags },
			{ new: true }
		).populate('comments');

	delete = async (id: string) => {
		const task = await Task.findByIdAndDelete(id);
		await TaskList.updateOne({ data: id }, { $pull: { data: id } });
		return task;
	};
}

export default new TaskService();
