//2.CONTROLADORES

import tourModel from '../models/tourModel.js'
import { v4 as uuidv4} from 'uuid';

const getALLtoursController = async(req, res) => {
    try{
        const tours = await tourModel.getALLtoursModel()
        res.status(200).json(tours)

    }catch(error){
        console.log(error)
    }
}

//Creacion del controlador en conexion con el modelo
const createTourController = async (req,res) =>{
    const newTourData={
        id:uuidv4(),
        ...req.body
    }
    try{
        const tour = await tourModel.createTourModel(newTourData)
        res.status(201).json(tour)
    }catch(error){
        res.status(500).json(error)
    }
}

const updatedTourController = async (req,res) =>{
    const{id} = req.params
    try{
        const tour = await tourModel.updateTourModel(id,req.body)
        res.status(200).json(tour)
    }catch(error){
        res.status(500).json(error)
    }
}

const deleteTourModel = async (req,res) =>{
    const{id} = req.params
    try{
        const tour = await tourModel.deleteTourModel(id,req.doby)
        res.status(200).json({msg:"Tour eliminado correctamente"})
    }catch(error){
        res.status(500).json(error)
    }
}

const getonetourController = async(req, res) => {
    try{
        const tours = await tourModel.getonetoursModel(id, req.body)
        res.status(200).json(tours)

    }catch(error){
        console.log(error)
    }
}

//Con esto se puede exportar muchas cosas, metodos, etc.
//Se llama exportacion nombrada.
export{
    getALLtoursController,
    createTourController,
    updatedTourController,
    deleteTourModel,
    getonetourController
}

