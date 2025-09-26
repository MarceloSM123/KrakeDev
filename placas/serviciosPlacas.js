validarEstructura=function(placa){
let validacion=false;
let error="";
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
    if(esDigito(placa.charAt(5))==false){
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

obtenerProvincias=function(placa){
    let letra = placa.charCodeAt(0);
    let provincia;
    if(letra==65 || letra==66 || letra==85 || letra==67 || letra==88 || letra==72 || letra==69 || letra==87 || letra==71 || letra==73 || letra==76 || letra==82 || letra==77 || letra==86 || letra==78 || letra==83 || letra==80 || letra==75 || letra==81 || letra==84 || letra==90 || letra==89){
    if(letra==65){
       return provincia="Azuay";
    }
    if(letra==66){
       return provincia="Bolívar";
    }
    if(letra==85){
       return provincia="Cañar";
    }
    if(letra==67){
       return provincia="Carchi";
    }
    if(letra==88){
       return provincia="Cotopaxi";
    }
    if(letra==72){
       return provincia="Chimborazo";
    }
    if(letra==69){
       return provincia="Esmeraldas";
    }
    if(letra==87){
       return provincia="Galápagos";
    }
    if(letra==71){
       return provincia="Guayas";
    }
    if(letra==73){
       return provincia="Imbabura";
    }
    if(letra==76){
       return provincia="Loja";
    }
    if(letra==82){
       return provincia="Los Ríos";
    }
    if(letra==77){
       return provincia="Manabí";
    }
    if(letra==86){
       return provincia="Morona Santiago";
    }
    if(letra==78){
       return provincia="Napo";
    }
    if(letra==83){
       return provincia="Pastaza";
    }
    if(letra==80){
       return provincia="Pichincha";
    }
    if(letra==75){
       return provincia="Sucumbíos";
    }
    if(letra==81){
       return provincia="Orellana";
    }
    if(letra==84){
       return provincia="Tungurahua";
    }
    if(letra==90){
       return provincia="Zamora Chinchipe";
    }
    if(letra==89){
       return provincia="Santa Elena";
    }} else{
        return provincia=null;
    }

}

obtenerTipoVehiculo=function(placa){
let letra = placa.charCodeAt(1);
let vehiculo;
if(letra==65 || letra==90 || letra==69 || letra==88 || letra==83 || letra==77){
if(letra==65 || letra==90){
    return vehiculo="Vehiculo comercial"
}
if(letra==69 ){
    return vehiculo="Vehiculo gubernamental"
}
if(letra==88 ){
    return vehiculo="Vehiculo uso oficial"
}
if(letra==83 ){
    return vehiculo="Vehiculo gobierno provincial"
}
if(letra==77 ){
    return vehiculo="Vehiculo municipal"
}}else{
    return vehiculo="Vehiculo particular"
}
}

obtenerDiaPicoYPlaca=function(placa){
let letra = placa.charCodeAt(6);
let dia;
if(letra==49 || letra==50 ){
   return dia="Lunes";
}
if(letra==51 || letra==52 ){
    return dia="Martes";
}
if(letra==53 || letra==54 ){
    return dia="Miercoles";
}
if(letra==55 || letra==56 ){
   return dia="Jueves";
}
if(letra==57 || letra==48 ){
    return dia="Viernes";
}
}