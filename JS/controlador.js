import {pintarCanciones} from "./pintarCanciones.js"
import {generarURI} from "./generarArtistas.js"
import {generarTOKEN} from "./generadorToken.js"
import {consumirAPI} from "./servicios.js"

let cards=document.getElementById("contenedorCanciones")

let boton= document.getElementById("boton")
boton.addEventListener("click",function(evento){


    evento.preventDefault()

    let artistaSeleccionada= document.getElementById("artista").value

    let URI=generarURI(artistaSeleccionada)



    
    async function activarAPI(){
        let token=await generarTOKEN()
        console.log(token)
        

        let datosConsultadosAPI= await consumirAPI(URI,token)
      
        pintarCanciones(datosConsultadosAPI)
    }

    activarAPI()
    cards.innerHTML=""



})