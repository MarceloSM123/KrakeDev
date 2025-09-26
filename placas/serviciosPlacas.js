validarEstructura=function(placa){
let validacion=false;
let error;
if(placa.length==7 || placa.length==8 ){
validacion=true;
}else{
    error="la placa debe tener de 7 u 8"
    return error;
}
if(esMayuscula(placa.charAt(0))&& esMayuscula(placa.charAt(1)) && esMayuscula(placa.charAt(2))){
    validacion=true;
}else{
    if(esMayuscula(placa.charAt(0))==false){
    error=error+","+" La primera letra debe ser mayuscula"
    }
    if(esMayuscula(placa.charAt(1))==false){
    error=error+","+" La segunda letra debe ser mayuscula"
    }
    if(esMayuscula(placa.charAt(2))==false){
    error=error+","+" La tercera letra debe ser mayuscula"
    }
}
if(esGuion(placa.charAt(3))){
validacion=true;
}else{
    error=error+" , "+"el cuarto caracter debe ser un guion"
}
if(esDigito(placa.charAt(4)) && esDigito(placa.charAt(5)) && esDigito(placa.charAt(6))){
validacion=true;
}else{
    if(esDigito(placa.charAt(4))==false){
        error=error+" , "+"el quinto caracter debe ser un numero"
    }
    if(esDigito(placa.charAt(4))==false){
        error=error+" , "+"el sexto caracter debe ser un numero"
    }
    if(esDigito(placa.charAt(6))==false){
        error=error+" , "+"el septimo caracter debe ser un numero"
    }
}
if(validacion==false){
   error=null;
    return error;
}else{
   return error;
  
}

}