import { Router, Request, Response } from 'express';
import resultHandler from '../../utils/resultHandler';
import { todosController } from './controllers';

const router = Router();

// Get All
router.get(
  '/',
  resultHandler(async (req: Request, res: Response) => {
    return todosController.getAll();
  }),
);

router.post(
  '/',
  resultHandler(async (req: Request, res: Response) => {
    return todosController.create(req.body);
  }),
);
// TODO: Add routes for deleting and editing todos
router.put('/',
resultHandler(async(req:Request,res:Response)=>{
  return todosController.reOrder(req.body);
})
);
router.put('/:id',
resultHandler(async(req:Request,res:Response)=>{
  return todosController.update(req.body,req.params.id);
})
);
router.delete('/:id',
resultHandler(async(req:Request,res:Response)=>{
  return todosController.delete(req.params.id);
})
);

export default router;
