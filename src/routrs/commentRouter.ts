import { Router } from 'express';
import CommentController from '../controllers/CommentController';

export const router = Router();

router.post('/', CommentController.create);
router.delete('/:id', CommentController.delete);

export default router;
