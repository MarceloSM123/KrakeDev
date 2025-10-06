let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1237897410",nombre:"Marcelo",apellido:"Salcedo",sueldo:1000.0}
]
let esNuevo=false;

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente(
"txtNombre");
    deshabilitarComponente(
"txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados=function(){
    let cmpTablaEmpleados=document.getElementById("tablaEmpleados");
   let elementoRecuperado;
   let tabla="<table><tr><th> CEDULA </th><th> NOMBRE </th><th> APELLIDO </th><th> SUELDO </th></tr>"
    for(let i=0;i<empleados.length;i++){
        elementoRecuperado=empleados[i];
        tabla+=
        "<tr>"+
        "<td>"+elementoRecuperado.cedula+"</td>"+
        "<td>"+elementoRecuperado.nombre+"</td>"+
        "<td>"+elementoRecuperado.apellido+"</td>"+
        "<td>"+elementoRecuperado.sueldo+"</td>"+
        "</tr>"
    }

tabla+="</table>";
cmpTablaEmpleados.innerHTML=tabla;
}

ejecutarNuevo=function(){
    esNuevo=true;
    habilitarComponente("txtCedula");
    habilitarComponente(
"txtNombre");
    habilitarComponente(
"txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

buscarEmpleado=function(cedula){
    let objetoEmpleado;
    for(let i=0; i<empleados.length;i++){
        objetoEmpleado=empleados[i];
        if(objetoEmpleado.cedula==cedula){
            return objetoEmpleado;
            break;}
    }
    if(objetoEmpleado!={}){
        return null
    }

}

agregarEmpleado=function(objetoEmpleado){
if(buscarEmpleado(objetoEmpleado.cedula)!=null){
    return false
}else{
    empleados.push(objetoEmpleado);
    return true
}
}

guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let cedula="";//cedula nombre apellido sueldo
    let valorNombre=recuperarTexto("txtNombre");
    let nombre="";
    let valorApellido=recuperarTexto("txtApellido");
    let apellido="";
    let valorSueldo=recuperarFloat("txtSueldo");
    let sueldo=0.0;
    if(valorCedula.length==10){
        if(isNaN(parseInt(valorCedula))){
            mostrarTexto( "lblErrorCedula","UNICAMENTE INGRESE NUMEROS");
        }else{
            cedula=valorCedula;
            mostrarTexto( "lblErrorCedula","");
        }
    }else{
        mostrarTexto( "lblErrorCedula","INGRESE UNICAMENTE 10 DIGITOS");
    }
    if(valorNombre.length>=3){
        let validacion=true;
        for(let i=0;i<valorNombre.length;i++){
            validacion=esMayuscula(valorNombre.charAt(i));
           if( esMayuscula(valorNombre.charAt(i))==false){
            mostrarTexto( "lblErrorNombre","INGRESE SOLO MAYUSCULAS");
           }
           
        }
        if(validacion==true){
            nombre=valorNombre;
             mostrarTexto( "lblErrorNombre","");
        }
    }else{
        mostrarTexto( "lblErrorNombre","INGRESE 3 MAYUSCULAS O MAS");
    }

    if(valorApellido.length>=3){
        let validacion1=true;
        for(let i=0;i<valorApellido.length;i++){
            validacion=esMayuscula(valorApellido.charAt(i));
           if( esMayuscula(valorApellido.charAt(i))==false){
            mostrarTexto( "lblErrorApellido","INGRESE SOLO MAYUSCULAS");
           }
           
        }
        if(validacion1==true){
            apellido=valorApellido;
            mostrarTexto( "lblErrorApellido","");
        }
    }else{
        mostrarTexto( "lblErrorApellido","INGRESE 3 MAYUSCULAS O MAS");
    }

    if(valorSueldo>=400 && valorSueldo<=5000){
        sueldo=valorSueldo;
        mostrarTexto( "lblErrorSueldo","");
    }else{
        mostrarTexto( "lblErrorSueldo","INGRESE VALORES ENTRE 400 Y 5000");
    }

    if(cedula!="" && nombre!="" && apellido!="" && sueldo!=0.0){
        if(esNuevo==true){
            let nuevo={};
            let respuesta;
        
            nuevo.cedula=cedula;
            nuevo.nombre=nombre;
            nuevo.apellido=apellido;
            nuevo.sueldo=sueldo;
        respuesta=agregarEmpleado(nuevo);
        if(respuesta==false){
            let empleado={};
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+cedula);
            empleado=buscarEmpleado(nuevo.cedula);
            empleado.nombre=nombre;
            empleado.apellido=apellido;
            empleado.sueldo=sueldo;
             alert("EMPLEADO MODIFICADO EXITOSAMENTE");
             mostrarEmpleados();
             deshabilitarComponentes();
        }else{
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarComponentes();
            esNuevo=false;
        }
        }
        
    }

}

deshabilitarComponentes=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda=function(){
    let valorcedula=recuperarTexto("txtBusquedaCedula");
    let resultado=buscarEmpleado(valorcedula);
    if(resultado==null){
        alert("EL RESULTADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",resultado.cedula);
        mostrarTextoEnCaja("txtNombre",resultado.nombre);
        mostrarTextoEnCaja("txtApellido",resultado.apellido);
        mostrarTextoEnCaja("txtSueldo",resultado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
}

limpiar=function(){
        mostrarTextoEnCaja("txtCedula","");
        mostrarTextoEnCaja("txtNombre","");
        mostrarTextoEnCaja("txtApellido","");
        mostrarTextoEnCaja("txtSueldo","");
        esNuevo=false;
        deshabilitarComponentes();
}

buscarPorRol=function(){
    let valorCaja=recuperarTexto("txtBusquedaCedulaRol");
    let empleado=buscarEmpleado(valorCaja);
    if(empleado!=null){
        mostrarTexto("infoNombre",empleado.nombre+" "+empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
        mostrarTexto("infoCedula",empleado.cedula);
    }else(alert("EL EMPLEADO NO EXISTE")

    )

}