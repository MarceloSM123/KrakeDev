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
        console.log(palabraSecreta);
        intentos=0}
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
        mostrarAhorcado();

    }
}

ingresarLetra=function(){
    let letra;
        intentos++;
    letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)==true){
       validar(letra); 
       if(coincidencias==5){
       //alert("HA GANADO");
       mostrarImagen("ahorcadoImagen","ganador.gif");
       
       }
       if(intentos==10){
       //alert("HA PERDIDO");
       mostrarImagen("ahorcadoImagen","gameOver.gif");
       }
    } else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

mostrarAhorcado=function(){
    if(errores==1){
    mostrarImagen("ahorcadoImagen","Ahorcado_01.png");}
    else if(errores==2){
    mostrarImagen("ahorcadoImagen","Ahorcado_02.png");}
    else if(errores==3){
    mostrarImagen("ahorcadoImagen","Ahorcado_03.png");}
    else if(errores==4){
    mostrarImagen("ahorcadoImagen","Ahorcado_04.png");}
    else if(errores==5){
    mostrarImagen("ahorcadoImagen","Ahorcado_05.png");}
    else if(errores==6){
    mostrarImagen("ahorcadoImagen","Ahorcado_06.png");}
    else if(errores==7){
    mostrarImagen("ahorcadoImagen","Ahorcado_07.png");}
    else if(errores==8){
    mostrarImagen("ahorcadoImagen","Ahorcado_08.png");}
    else if(errores==9){
    mostrarImagen("ahorcadoImagen","Ahorcado_09.png");}
}