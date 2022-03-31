
export function pintarIndex() {


    let artista = [

        { foto: './img/A.jpeg', nombre: "Adele", cuadroTexto: "Since the release of her debut album ‘19’, in 2008, Adele has become one of the most successful British artists of her generation. Her critically acclaimed debut album garnered over 6.5 million sales worldwide whilst the album has gone 8x Platinum in the UK. At the age of 19, Adele became the first-ever recipient of the BRITS Critics’ Choice Award. " },
        { foto: './img/MC.jpeg', nombre: "Miley Cyrus", cuadroTexto: "Miley Cyrus is one of the most influential artists in pop culture with about 160 million Instagram followers. She has six #1 albums including her 2013 GRAMMY-nominated album Bangerz, which is also certified 3x platinum in the U.S. In addition, she has had an impressive five sold-out world tours throughout her career." },
        { foto: './img/HK.jpeg', nombre: "Hayley Kiyoko", cuadroTexto: "Hayley Kiyoko has become one of the most celebrated pop artists since releasing her landmark debut album EXPECTATIONS, which according to Rolling Stone, placed her “at the forefront of an unapologetically queer pop movement.” Kiyoko was nominated for two VMAs in 2018 where she performed “Curious” and won Push Artist Of The Year. " },
        { foto: './img/KG.jpeg', nombre: "Kany garcía", cuadroTexto: "La galardonada cantautora puertorriqueña Kany García es una voz única e inigualable, relatando las historias de las mujeres del Siglo XXI a través de sus interpretaciones expresivas y su letra sumamente perceptiva.Ganadora de seis Latin GRAMMYs® a lo largo de su carrera, Kany García lanzó su primer disco Cualquier Día en el 2007. " },
        { foto: './img/NP.jpeg', nombre: "Nathy Peluso", cuadroTexto: "Nathy Peluso es una de las artistas más relevantes de la nueva generación. Argentina criada en España, con apenas veinticinco años ha conseguido ser reconocida por el público gracias a su reinterpretación de la mezcla de géneros musicales como el hip-hop, el jazz, o el folklore latinoamericano a través de a su prodigiosa voz y a su capacidad de comportarse como una gran diva de los años 50 al estilo de Nina Simone o Ella Fitzgerald, pero también como la artista urbana hija del tiempo que le toca vivir generacionalmente" },

    ]



    let ContenedorIndex = document.getElementById("contenedorIndex")

    artista.forEach(function (artista) {


        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-60")
        imagen.classList.add("p-3")
        imagen.src = artista.foto

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
        nombre.textContent = artista.nombre


        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("text-center")
        cuadroTexto.classList.add("me-3")
        cuadroTexto.classList.add("ms-3")
        cuadroTexto.classList.add("mb-3")
        cuadroTexto.textContent = artista.cuadroTexto



        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(cuadroTexto)


        columna.appendChild(tarjeta)
        ContenedorIndex.appendChild(columna)

    })
}

