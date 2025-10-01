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