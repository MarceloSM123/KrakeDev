let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1237897410",nombre:"Marcelo",apellido:"Salcedo",sueldo:1000.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
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
