
export function pintarCanciones(resultado) {
    console.log(resultado)


    let ContenedorCanciones = document.getElementById("contenedorCanciones")

    let nombreArtista=document.createElement("h1")
    nombreArtista.textContent=resultado.tracks[0].artists[0].name
  

    ContenedorCanciones.appendChild(nombreArtista)

    let fila=document.createElement("div")
    fila.classList.add("row")
    fila.classList.add("g-4")
    resultado.tracks.forEach(function (cancion) {


        let columna = document.createElement("div")
        columna.classList.add("col")
        columna.classList.add("col-6")
       

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-60")
        imagen.classList.add("p-3")
        imagen.src = (cancion.album.images[0].url)

        let separador = document.createElement("hr")
        separador.classList.add("w-75")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")
        separador.classList.add("border")
        separador.classList.add("text-dark")


        let nombre = document.createElement("h5")
        nombre.classList.add("text-dark")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = cancion.name

        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("text-center")


        let preview = document.createElement("audio")
        preview.src = cancion.preview_url
        preview.setAttribute("controls", "controls")
        preview.classList.add("w-100")

        
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        cuadroTexto.appendChild(nombre)
        cuadroTexto.appendChild(preview)



        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        ContenedorCanciones.appendChild(fila)
      

    })


}