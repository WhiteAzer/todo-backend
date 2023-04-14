import { Router } from 'express';
import TaskController from '../controllers/TaskController';

export const router = Router();

router.route('/').post(TaskController.create).put(TaskController.update);
router.route('/:id').get(TaskController.getOne).delete(TaskController.delete);

export default router;
