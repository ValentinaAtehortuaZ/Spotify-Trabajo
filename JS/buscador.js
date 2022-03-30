import {generarURI} from "./generarArtistas.js"

export function buscarArtista(buscador){
    let capturetext = document.getElementById("cajaBusqueda").value;
    let ID
    
   if(capturetext.toLowerCase()==("Miley Cyrus".toLowerCase())){
    ID="5YGY8feqx7naU7z4HrwZM6"
    
     
   }

   else if(capturetext.toLowerCase()==("Adele".toLowerCase())){
    ID="4dpARuHxo51G3z768sgnrY"
    
   }
   else if(capturetext.toLowerCase()==("hayley kiyoko")){
     ID="3LjhVl7GzYsza1biQjTpaN"
   }
   else if(capturetext.toLowerCase()==("kany garcia")){
    ID="69UypehHabb68utzfjAVlV"
  }
  else if(capturetext.toLowerCase()==("nathy peluso")){
    ID="3VHAySZQPlfGlNLslzXYpN"
  }

  
return(ID)

  
   
  }

  generarURI()



    
