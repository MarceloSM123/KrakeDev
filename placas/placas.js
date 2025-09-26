validarPlaca=function(){
    let componente;
    let mensaje;
    let etiqueta1;
    let etiqueta2;
    let erroresEstructura;
    let provincia;
    componente=document.getElementById("txtPlaca");
    etiqueta1=document.getElementById("lblMensaje1");
    etiqueta2=document.getElementById("lblMensaje2");
    mensaje=componente.value;
    erroresEstructura = validarEstructura(mensaje);
    if(erroresEstructura==null){
     etiqueta1.innerText="ESTRUCTURA VALIDA";
     etiqueta2.innerText="";
     provincia=obtenerProvincias(mensaje);
     if(provincia==null){
        console.log("Provincia incorrecta");
     }else{
        console.log(provincia);
     }
    }else{
        etiqueta2.innerText="ESTRUCTURA INCORRECTA: "+ erroresEstructura;
        etiqueta1.innerText="";
    }


}