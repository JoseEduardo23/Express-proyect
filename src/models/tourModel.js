//Metodo que permite obtener los tours e la base de datos.


//Obtener los modelos

//1. MODELO
const tourModel = {
    async getALLtoursModel() {
        try {
            const peticion = await fetch('http://localhost:4000/TOURS')
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.log(error)
        }
    }


    ,

    //CREAR
    async createTourModel(newModel){
        //1.Conexion a la BDD
        const url = "http://localhost:4000/TOURS"

        //2.Enviar datos
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newModel),
            headers:{"Content-Type":"application/json"}
        })
        
        //3.Obtener respuesta
        const data = await peticion.json()

        //4.Manda respuesta al controlador
        return data
    }

    ,

    //UPDATE
    async updateTourModel(tourid, updatedTour){
        //1.Conexion a la BDD
        const url = `http://localhost:4000/TOURS/${tourid}`
        //2.Enviar datos
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedTour), //esto se modifica
            headers:{"Content-Type":"application/json"}
        })
        //3.Obtener respuesta
        const data = await peticion.json()

        //4.Manda respuesta al controlador
        return data
    }


    ,


    //DELETE
    async deleteTourModel(tourid){
            //1.Conexion a la BDD
            const url = `http://localhost:4000/TOURS/${tourid}`
            //2.Enviar datos
            const peticion = await fetch(url,{
            method:"DELETE",
            body:JSON.stringify(deleteTourModel), //esto se modifica
            headers:{"Content-Type":"application/json"}
            })
            //3.Obtener respuesta
            const data = await peticion.json()
        
            //4.Manda respuesta al controlador
            return data
    }

    ,


    //Buscar un tour o info de uno en particular
      //Leer
      async readTourModel(tourid){
        //1.Conexion a la BDD
        const url = `http://localhost:4000/TOURS/${tourid}`
        //2.Enviar datos
        const peticion = await fetch(url,{
        method:"GET",
        body:JSON.stringify(readTourModel), //esto se modifica
        headers:{"Content-Type":"application/json"}
        })
        //3.Obtener respuesta
        const data = await peticion.json()
    
        //4.Manda respuesta al controlador
        return data
} 


}



//Exporta una sola cosa en este caso un ejemplo
export default tourModel