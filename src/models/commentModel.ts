import { Schema, model } from 'mongoose';
import { IComment } from '../types/data';

const CommentSchema = new Schema<IComment>(
	{
		author: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false }
);

export const Comment = model<IComment>('Comment', CommentSchema);
