validarPlaca=function(){
    let componente;
    let mensaje;
    let etiqueta1;
    let etiqueta2;
    let etiqueta3;
    let etiqueta4
    let erroresEstructura;
    let provincia;
    let vehiculo;
    componente=document.getElementById("txtPlaca");
    etiqueta1=document.getElementById("lblMensaje1");
    etiqueta2=document.getElementById("lblMensaje2");
    etiqueta3=document.getElementById("lblMensaje3");
    etiqueta4=document.getElementById("lblMensaje4");
    mensaje=componente.value;
    erroresEstructura = validarEstructura(mensaje);
    if(erroresEstructura==null){
     etiqueta1.innerText="ESTRUCTURA VALIDA";
     etiqueta2.innerText="";
     provincia=obtenerProvincias(mensaje);
     if(provincia==null){
        console.log("Provincia incorrecta");
        etiqueta3.innerText="Provincia incorrecta";
     }else{
        console.log(provincia);
        etiqueta3.innerText="PROVINCIA: "+provincia;
     }
    vehiculo=obtenerTipoVehiculo(mensaje);
    etiqueta4.innerText= "VEHICULO TIPO: "+vehiculo;
    console.log(vehiculo);
    }else{
        etiqueta2.innerText="ESTRUCTURA INCORRECTA: "+ erroresEstructura;
        etiqueta1.innerText="";
    }


}