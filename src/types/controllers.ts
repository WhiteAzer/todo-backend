import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ITask, TTaskListId } from './data';

export interface ICustomRequest<B = unknown, P = unknown> extends Request {
	body: B;
	params: P & ParamsDictionary;
}

export type IRequestWithId = ICustomRequest<unknown, { id: string }>;

export type ITaskRequest<T = unknown> = ICustomRequest<ITask & T>;

export type TPosition = {
	index: number;
	title: TTaskListId;
};
