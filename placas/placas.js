validarPlaca=function(){
    let componente;
    let mensaje;
    let erroresEstructura;
    componente=document.getElementById();
    componente.value=mensaje;
    erroresEstructura=validarEstructura(mensaje);
    if(erroresEstructura==null){
     console.log("ESTRUCTURA VALIDA");
    }else{
        console.log("ESTRUCTURA INCORRECTA: "+ erroresEstructura);
    }


}