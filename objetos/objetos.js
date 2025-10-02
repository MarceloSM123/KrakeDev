crearProductos=function(){
    let producto1={
        nombre:"TURBONEITOR",
        Precio:100.50,
        stock:200,

    }
    let producto2={
        nombre:"LAPTOP",
        Precio:1500.0,
        stock:100,
    }
    console.log(producto1.nombre);
    console.log(producto2.Precio);
    if(producto1.stock != producto2.stock){
        if(producto1.stock>producto2.stock){
            console.log("Producto1 tiene mayor stock");
        }else{
            console.log("Producto2 tiene mayor stock");
        }
    }else{
        console.log("Ambos productos tienen el mismo stock");
    }
}

probarAtributos=function(){
    let persona={
        nombre: "Marcelo",
        apellido: "Salcedo",
        edad: 33,
        estaVivo: true,
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero:"1231231312",
        saldo:0.0,
    }
    cuenta.saldo=100;// modificacion de atributos del objeto
    cuenta.saldo+=10
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"123123123",
        nombre: "juan",
    }
    cliente.nombre="marcelo"// modifica el atributo del objeto
    cliente.nom="hola"// añade el atributo nom y le asigna hola
    let cliente1={}//es un objeto sin atributos
    cliente1.nombre="Maria"//añade el atributo y su valor al objeto vacio
    cliente1.nom="lcos"//añade el atributo nom y su vaor al objeto
}