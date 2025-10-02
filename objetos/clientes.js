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