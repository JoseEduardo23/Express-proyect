//Requerir moduos 

//ESMODULES
import express from  'express'
import router from '../src/routers/tour_routes.js'

//INICIASION
const app = express()

//Variables

app.set('port', process.env.port || 3000)

//MIDDLEWARE

app.use(express.json())

//RUTA PRINCIPAL

app.get('/', (req, res) =>{
    res.send("OK")
})

//RUTAS PARA EL TOUR
app.use('/api',router)

//RUTAS PARA EL USER

//RUTAS PARA EL BOOKING

//Exportar la instancia app

export default app

