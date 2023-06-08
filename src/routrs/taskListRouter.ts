import { Router } from 'express';
import TaskListController from '../controllers/TaskListController';

const router = Router();

router.route('/').get(TaskListController.getAll).put(TaskListController.changePosition);
router.get('/:title', TaskListController.getColumn);

export default router;
