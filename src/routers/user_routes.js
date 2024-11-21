import { Router } from 'express'
import { loginUserController, registerUserController } from '../controllers/userController.js'

const router = Router()

//PUBLIC
router.post('/USERS/register', registerUserController)

router.post('/USERS/login', loginUserController)


//Si es una exportacion por defoult se puede renombrar
export default router