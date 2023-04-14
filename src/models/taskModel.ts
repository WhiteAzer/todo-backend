import { Schema, model } from 'mongoose';
import { ITask } from '../types/data';

const TaskSchema = new Schema<ITask>(
	{
		title: {
			type: String,
			required: true,
		},
		description: String,
		tags: {
			violet: {
				type: Boolean,
				default: false,
			},
			green: {
				type: Boolean,
				default: false,
			},
			red: {
				type: Boolean,
				default: false,
			},
			orange: {
				type: Boolean,
				default: false,
			},
			blue: {
				type: Boolean,
				default: false,
			},
			lightGreen: {
				type: Boolean,
				default: false,
			},
			darkBlue: {
				type: Boolean,
				default: false,
			},
			yellow: {
				type: Boolean,
				default: false,
			},
		},
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
				default: [],
			},
		],
	},
	{ versionKey: false }
);

export const Task = model<ITask>('Task', TaskSchema);
