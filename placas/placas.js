validarPlaca=function(){
    let componente;
    let mensaje;
    let etiqueta1;
    let etiqueta2;
    let erroresEstructura;
    componente=document.getElementById("txtPlaca");
    etiqueta1=document.getElementById("lblMensaje1");
    etiqueta2=document.getElementById("lblMensaje2");
    mensaje=componente.value;
    erroresEstructura = validarEstructura(mensaje);
    if(erroresEstructura==null){
     etiqueta1.innerText="ESTRUCTURA VALIDA";
     etiqueta2.innerText="";
     console.log("ESTRUCTURA VALIDA");
    }else{
        console.log("ESTRUCTURA INCORRECTA: "+ erroresEstructura);
        etiqueta2.innerText="ESTRUCTURA INCORRECTA: "+ erroresEstructura;
        etiqueta1.innerText="";
    }


}