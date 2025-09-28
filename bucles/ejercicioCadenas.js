ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
    mostrarTexto( "lblInvertido",invertirCadena(mensaje));
}
invertirCadena=function(cadena){
let caracter;
let mensaje="";
for(let posicion=cadena.length;posicion>=0;posicion--){
caracter=cadena.charAt(posicion);
mensaje=mensaje+caracter;
console.log("Caracter: "+caracter+" posicion "+ posicion);
}
return mensaje
}

buscarLetra=function(cadena,letra){
let letraIterada;
let existeLetra=false;
for(let i=0; i<cadena;length, i++){
letraIterada=cadena.charAt(i);
if(letraIterada==letra){
    return true;
}
}
if(existeLetra==true){
 return true;
} else{
    return false;
}
}



recorrerCadena=function(cadena){
let caracter;
for(let posicion=0;posicion<cadena.length;posicion++){
caracter=cadena.charAt(posicion);
console.log("Caracter: "+caracter+" posicion "+ posicion);
}
for(let posicion=0;posicion<=cadena.length-1;posicion++){
caracter=cadena.charAt(posicion);
console.log("CARACTER: "+caracter+" POSICION "+ posicion);
}
}