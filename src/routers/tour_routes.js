//3.Rutas
import {Router} from 'express'
import { createTourController, deleteTourModel, getALLtoursController, getonetourController, updatedTourController } from '../controllers/tour_controller.js'
const router = Router()


//Publicas
router.get('/TOURS',getALLtoursController)


//Privadas - Admin or employed
router.post('/TOURS', createTourController)

router.put('/TOURS/:id', updatedTourController)

router.delete('/TOURS/:id', deleteTourModel)

router.get('/TOURS/:id', getonetourController)

export default router