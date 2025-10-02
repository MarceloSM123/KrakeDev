let clientes=[
    {cedula:"123131",nombre:"Carla",edad:33},
    {cedula:"2342342",nombre:"Diana",edad:25},
    {cedula:"8787871",nombre:"Domenica",edad:100}
        ];

mostrarClientes=function(){
    let contenidoTabla="<table><tr>CEDULA</th><tr>NOMBRE</th><tr>EDAD</th>";
    let elementoCliente;
    let cmptabla;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>";
    cmptable=document.getElementById("mostrarTabla");
    cmptable.innerHTML=contenidoTabla;
}     

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
    }else{
        alert("ya existe el cliente con la cedula: "+cliente.cedula);
    }
}

crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarTexto("txtEdad");
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=parseInt(valorEdad);
    agregarCliente(nuevoCliente);
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let respuesta=buscarCliente(valorCedula); 
    if(respuesta==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
    }
}

modificarCliente=function(cliente){
let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarTexto("txtEdad");
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=parseInt(valorEdad);
    modificarCliente(datosCliente);
    mostrarClientes();

}