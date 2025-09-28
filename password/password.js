esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65 && codigo<=90){
        return true
    }else{
        return false
    }
}

esCaracter=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo==95 || codigo==42 ||codigo==45){
        return true
    }else{
        return false
    }
}

esDigito=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=48 && codigo<=57){
        return true
    }else{
        return false
    }
}



validaPassword=function(Password){
let mayuscula;
let digito;
let especial;
let caracter;
let mensaje="";
let l=0;
let m=0;
let w=0;
if(Password.length>=8 && Password.length<=16){
for(let i=0; i<Password.length;i++){
    caracter=Password.charAt(i);
    console.log(caracter);
    mayuscula=esMayuscula(caracter);
    if(mayuscula==true){
        l=l+1;
        console.log("mayuscula"+l);
    }
    digito=esDigito(caracter);
    if(digito==true){
        m=m+1;
        console.log("digito"+m);
    }
    especial=esCaracter(caracter);
    if(especial==true){
        w=w+1;
        console.log("especial"+w);
    }
}
}else{
   mensaje="el password debe tener entre 8 y 16 caracterres";
}
console.log(l+" "+m+""+w);

if(l>0 & m>0 & w>0){
return "";
}else{
    if(l==0){
        mensaje=mensaje+": ingrese almenos una letra mayuscula : ";
        console.log(mensaje);
        
    }
    if(m==0){
        mensaje=mensaje+": ingrese almenos un numero del 0 al 9 : ";
        console.log(mensaje);
    }
    if(w==0){
        mensaje=mensaje+": ingrese almenos un caracter del tipo *,-,_ ";
        console.log(mensaje);
    }
     return mensaje
}
}

ejecutarValidacion=function(){
let texto;
let alerta;
texto=recuperarTexto("txtpassword");
alerta=validaPassword(texto);
mostrarTexto("cmpRespuesta",alerta)
}