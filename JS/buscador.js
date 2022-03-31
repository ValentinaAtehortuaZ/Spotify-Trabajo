import {generarURI} from "./generarArtistas.js"

export function buscarArtista(artista){
    
    let ID=""
    if(artista.toLowerCase()==("Miley Cyrus".toLowerCase())){
      ID="5YGY8feqx7naU7z4HrwZM6"
    }else if(artista.toLowerCase()==("Adele".toLowerCase())){
      ID="4dpARuHxo51G3z768sgnrY"
    }else if(artista.toLowerCase()==("hayley kiyoko")){
      ID="3LjhVl7GzYsza1biQjTpaN"
    }else if(artista.toLowerCase()==("kany garcia")){
      ID="69UypehHabb68utzfjAVlV"
    }else if(artista.toLowerCase()==("nathy peluso")){
      ID="3VHAySZQPlfGlNLslzXYpN"
    }else{
      ID="NAN"
    }

  return(ID)

}

  //generarURI()



    
