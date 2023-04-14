import { Router } from 'express';
import TaskListController from '../controllers/TaskListController';

const router = Router();

router.get('/:title', TaskListController.getColumn);
router.put('/', TaskListController.changePosition);

export default router;
