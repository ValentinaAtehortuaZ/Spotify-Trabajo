import {pintarCanciones} from "./pintarCanciones.js"
import {identificarArtistas} from "./artistas.js"
import {TOKEN} from "./generadorToken.js"
import {consumirAPI} from "./servicios.js"

// Obtengo del DOM (HTML) el valor de opcion

// Recibir la opción deseada
let opcion=3
// Obtengo las constantes
let URI = identificarArtistas(opcion)
console.log(URI)

// Llamo al servicio
let resultado=await consumirAPI(URI,TOKEN)
console.log(resultado)

pintarCanciones(resultado)