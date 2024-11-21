//Requerir moduos 

//ESMODULES
import express from  'express'
import routerTour from '../src/routers/tour_routes.js'
import routerUser from '../src/routers/user_routes.js'


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
app.use('/api',routerTour)

//RUTAS PARA EL USER

app.use('/api',routerUser)

//RUTAS PARA EL BOOKING


//Exportar la instancia app


export default app

