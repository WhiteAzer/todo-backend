import { Types } from 'mongoose';

export enum TagColor {
	VIOLET = 'violet',
	GREEN = 'green',
	RED = 'red',
	ORANGE = 'orange',
	BLUE = 'blue',
	LIGHT_GREEN = 'lightGreen',
	DARK_BLUE = 'darkBlue',
	YELLOW = 'yellow',
}

export type TTagsList = Record<TagColor, boolean>;

export type IComment = {
	author: string;
	text: string;
};

export interface ITask {
	title: string;
	description: string;
	tags?: TTagsList;
	comments: Array<Types.ObjectId>;
}

export type TTaskListId = 'todo' | 'in_process' | 'done';

export interface ITaskList {
	_id: TTaskListId;
	data: Array<Types.ObjectId>;
}
