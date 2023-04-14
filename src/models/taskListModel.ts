import { Schema, model } from 'mongoose';
import { ITaskList } from '../types/data';

const TaskListSchema = new Schema<ITaskList>(
	{
		_id: String,
		data: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Task',
				required: false,
			},
		],
	},
	{ versionKey: false }
);

export const TaskList = model<ITaskList>('TaskList', TaskListSchema);
