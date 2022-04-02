
export function pintarCanciones(resultado) {
let i=0
let nombre
let idAlbum=resultado.tracks[0].album.id
    console.log(idAlbum)
    console.log(resultado)
   
    if(idAlbum=="6Vsml6sziVKBHxbMEp5wgQ"){
      nombre="Hayley Kiyoko" 
    }else if(idAlbum=="21jF5jlMtzo94wbxmJ18aa"){
        nombre="Adele" 
    }else if(idAlbum=="6vdLdzihSWxV8FgWU2GSvA"){
        nombre="Miley Cyrus"
    }else if(idAlbum=="6EZE5e3vBZZkSsnyn1g1gb"){
        nombre="Kany García"
    }else if(idAlbum=="3jHBdwS3nCuPC6lThrFJba"){
        nombre="Nathy Peluso"
    }else{
        
    }

    
    let ContenedorCanciones = document.getElementById("contenedorCanciones")
    ContenedorCanciones.classList.add("mb-5")

    let nombreArtista=document.createElement("h1")
    nombreArtista.textContent=nombre
    nombreArtista.classList.add("text-center")
    nombreArtista.classList.add("fs-1")
    

    //let etiquetaImagen1=document.createElement("img")
    //etiquetaImagen1.src="../html/img/erro2.png"
   
  

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

        /*let nombre = document.createElement("h5")
        nombre.classList.add("text-dark")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = cancion.nombre*/

        
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
        //tarjeta.appendChild(nombre)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        cuadroTexto.appendChild(nombre)
        cuadroTexto.appendChild(preview)



        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        ContenedorCanciones.appendChild(fila)
      

    })


}