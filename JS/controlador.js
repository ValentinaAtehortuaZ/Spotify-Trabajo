import {pintarCanciones} from "./pintarCanciones.js"
import {generarURI} from "./generarArtistas.js"
import {generarTOKEN} from "./generadorToken.js"
import {consumirAPI} from "./servicios.js"
import { buscarArtista} from "./buscador.js"
//import{pintarIndex} from"./pintarIndex.js"



//recibir el id del artista a buscar
let artistaSeleccionada=(window.location.search.split("=")[1])
if(artistaSeleccionada=="NAN"){

  function cambiarArtistas(){
    
  let etiquetaImagen=document.getElementById("texto")
 
  etiquetaImagen.textContent=("¡ERROR! No se ha encontrado este artista.")
  etiquetaImagen.classList.add("text-center")
  etiquetaImagen.classList.add("mt-5")
  


  let etiquetaImagen1=document.getElementById("imagen1")
  etiquetaImagen1.src="../html/img/erro2.png"


  }
  cambiarArtistas()
}else{

  //con el idartista obtengo la uri del servicio
let URI=generarURI(artistaSeleccionada)
console.log(URI)

//Pido un TOKEN y consumo el servicio de top tracks
async function activarAPI(){
  let token=await generarTOKEN()
  let datosConsultadosAPI= await consumirAPI(URI,token)

  pintarCanciones(datosConsultadosAPI)
 
}



activarAPI()

}


let cards=document.getElementById("contenedorCanciones")

let boton= document.getElementById("boton")
boton.addEventListener("click",function(event){

    

  //let irPagina=document.getElementById("irPagina")  
 // irPagina.window.location.replace("./artista.html")
  //console.log(irPagina)

    //event.preventDefault()

    //let artistaSeleccionada= document.getElementById("artista").value
   
   //let artistaSelecciondo=buscarArtista()
   // let URI=generarURI(artistaSeleccionada)
    /*let URI=generarURI(artistaSelecciondo)
    console.log(artistaSelecciondo)


    
    async function activarAPI(){
        let token=await generarTOKEN()
        console.log(token)
        

        let datosConsultadosAPI= await consumirAPI(URI,token)
      
        pintarCanciones(datosConsultadosAPI)
       
    }
   artistaSelecciondo=""
    activarAPI()
    cards.innerHTML=""*/

   

})
//pintarIndex()