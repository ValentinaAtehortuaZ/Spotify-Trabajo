export function identificarArtistas(opcion){
    let URI
    switch(opcion){

        case 1: 
            // Adele
            console.log("Entre a 1")
            URI= "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/top-tracks?market=US"
            break
        case 2:
            // Miley Cyrus
            console.log("Entre a 2")
            URI="https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"
            break
        case 3:
            // Hayley Kiyoko
            console.log("Entre a 3")
            URI="https://api.spotify.com/v1/artists/3LjhVl7GzYsza1biQjTpaN/top-tracks?market=US"
            break
        case 4:
            // Kany Garcìa
            console.log("Entre a 4")
            URI="https://api.spotify.com/v1/artists/69UypehHabb68utzfjAVlV/top-tracks?market=US"
            break
        case 5:
            // Nathy Peluso
            console.log("Entre a 5")
            URI="https://api.spotify.com/v1/artists/3VHAySZQPlfGlNLslzXYpN/top-tracks?market=US"    
            break   
        default:
            console.log("Ingrese una opción valida") 
            URI=""
            break   
    }
    
    return URI
    
}