//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

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
       validacion=esMayuscula(palabra.charCodeAt(i));
       if(validacion==true){
        l++;
       }
    }
    
    if(palabra.length==5 && l==5){
        palabraSecreta=palabra;
    }else{  
        alert("INGRESE UNA PALABRA DE 5 LETRAS MAYUSCULAS"); 
    }
}