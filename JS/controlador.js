import {pintarCanciones} from "./pintarCanciones.js"
import {generarURI} from "./generarArtistas.js"
import {generarTOKEN} from "./generadorToken.js"
import {consumirAPI} from "./servicios.js"
import { buscarArtista} from "./buscador.js"
import{pintarIndex} from"./pintarIndex.js"

let cards=document.getElementById("contenedorCanciones")

let boton= document.getElementById("boton")
boton.addEventListener("click",function(event){

    event.preventDefault()

    //let artistaSeleccionada= document.getElementById("artista").value
   
   let artistaSelecciondo=buscarArtista()
   // let URI=generarURI(artistaSeleccionada)
    let URI=generarURI(artistaSelecciondo)
    console.log(artistaSelecciondo)


    
    async function activarAPI(){
        let token=await generarTOKEN()
        console.log(token)
        

        let datosConsultadosAPI= await consumirAPI(URI,token)
      
        pintarCanciones(datosConsultadosAPI)
       
    }
   artistaSelecciondo=""
    activarAPI()
    cards.innerHTML=""

   

})
pintarIndex()