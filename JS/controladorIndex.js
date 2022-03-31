import {pintarIndex} from "./pintarIndex.js"
import{buscarArtista} from './buscador.js'

let botonBusqueda=document.getElementById("irPagina")
botonBusqueda.addEventListener("click",function(evento){

    evento.preventDefault()
    
    let artistaSeleccionado=document.getElementById("cajaBusqueda").value
    

    window.location.href=(`./artistas.html?id=${buscarArtista(artistaSeleccionado)}`)

    
})

pintarIndex()