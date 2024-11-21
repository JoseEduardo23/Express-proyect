//3.Rutas
import {Router} from 'express'
import { createTourController, deleteTourModel, getALLtoursController, getonetourController, updatedTourController } from '../controllers/tour_controller.js'
import { verifyToken } from '../middlewares/auth.js'
const router = Router()


//Publicas
router.get('/TOURS',getALLtoursController)


//Privadas - Admin or employed
router.post('/TOURS',verifyToken, createTourController)

router.put('/TOURS/:id',verifyToken, updatedTourController)

router.delete('/TOURS/:id',verifyToken, deleteTourModel)

router.get('/TOURS/:id',verifyToken, getonetourController)

export default router