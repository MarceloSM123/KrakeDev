personas=[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5}
]

agregarPersona=function(){
    let nombre=recuperarTexto("txtNota1");
    let edad=recuperarInt("txtNota2");
    if(nombre.length<3 || (edad<0 || edad>100) ){
        if(nombre.length<3){
            mostrarTextoDIV("lblError1","Debe ingresar 3 o mas caracteres");
        }
        if(edad<0 || edad>100){
            mostrarTextoDIV("lblError2","ingrese numeros entre 0 y 100");
        }
    }else{
        let nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }
}

mostrarPersonas=function(){
    let tabla="<table><tr><th> EDAD </th><th> NOMBRE </th></tr>";
    let objetoPersonas={};
    let componente;
    for(let i=0;i<personas.length;i++){
        objetoPersonas=personas[i];
        tabla+="<tr>"+
        "<td>"+objetoPersonas.edad+"</td>"+
        "<td>"+objetoPersonas.nombre+"</td>"
        +"</tr>"
    }
    tabla+="</table>";
    componente=document.getElementById("divTabla");
    componente.innerHTML = tabla;
}

encontrarMayor=function(){
   // let personaMayor=personas[0].edad;
    let personaMayor=personas[0];
    let elementoPersona={};


    for(let i=1;i<personas.length;i++){
        console.log("NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad);
        elementoPersona=personas[i];
        if(personaMayor.edad<personas[i].edad){
            personaMayor=personas[i];
            console.log("NOMBRE: "+personaMayor.nombre+" EDAD: "+personaMayor.edad+"<"+"NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad);
        }else{
            console.log("NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad+"<"+"NOMBRE: "+personaMayor.nombre+" EDAD: "+personaMayor.edad);
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTextoDIV("lblResultado","NOMBRE: "+mayor.nombre+" EDAD: "+mayor.edad);
    console.log("NOMBRE: "+mayor.nombre+" EDAD: "+mayor.edad);
}

encontrarMenor=function(){
   // let personaMayor=personas[0].edad;
    let personaMenor=personas[0];
    let elementoPersona={};


    for(let i=1;i<personas.length;i++){
        console.log("NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad);
        elementoPersona=personas[i];
        if(personaMenor.edad>personas[i].edad){
            personaMenor=personas[i];
            console.log("NOMBRE: "+personaMenor.nombre+" EDAD: "+personaMenor.edad+"<"+"NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad);
        }else{
            console.log("NOMBRE: "+personas[i].nombre+" EDAD: "+personas[i].edad+"<"+"NOMBRE: "+personaMenor.nombre+" EDAD: "+personaMenor.edad);
        }
    }
    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTextoDIV("lblResultadoMenor","NOMBRE: "+menor.nombre+" EDAD: "+menor.edad);
    console.log("NOMBRE: "+menor.nombre+" EDAD: "+menor.edad);
}
