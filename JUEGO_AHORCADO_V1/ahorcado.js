//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65 && codigo<=90){
        return true
    }else{
        return false
    }
}

guardarPalabra=function(){
    let palabra;
    let validacion;
    let l=0;
    palabra=recuperarTexto("txtSecreta");

    for(let i=0; i<palabra.length;i++){
       validacion=esMayuscula(palabra.charAt(i));
       if(validacion==true){
        l++;
       }
    }
    
    if(palabra.length==5 && l==5){
        palabraSecreta=palabra;
        console.log(palabraSecreta);}
        else{
        
        alert("INGRESE UNA PALABRA DE 5 LETRAS MAYUSCULAS"); 
    }
}

mostrarLetra=function(letra, posicion){
if(posicion==0){
    mostrarTexto("div0",letra);
    coincidencias++;

}
if(posicion==1){
    mostrarTexto("div1",letra);
    coincidencias++;
}
if(posicion==2){
    mostrarTexto("div2",letra);
    coincidencias++;
}
if(posicion==3){
    mostrarTexto("div3",letra);
    coincidencias++;
}
if(posicion==4){
    mostrarTexto("div4",letra);
    coincidencias++;
}
}

validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<=palabraSecreta.length;i++){
        if(letra==palabraSecreta.charAt(i)){
            letrasEncontradas++;
            mostrarLetra(letra,i);
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
}

ingresarLetra=function(){
    let letra;
        intentos++;
    letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)==true){
       validar(letra); 
       if(concidencias==5){
       alert("HA GANADO");}
       if(intentos==10){
       alert("HA PERDIDO");}
    } else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}