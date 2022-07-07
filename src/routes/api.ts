import { Router } from 'express';

import * as PostoController from '../controllers/postoController';
import * as ClientController from '../controllers/clientController';

export const router = Router();

router.get('/postos', PostoController.all);
router.get('/posto/:id', PostoController.getFuelsPosto);

router.post('/cliente/pagamento', ClientController.createClient);
