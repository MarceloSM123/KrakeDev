let notas=[];// la variable global no se reinicia hasta que se reincie la pagina
agregarElementos=function(){
    // let notas=[]; como variable local de la funcion se reincia cada vez que se utiliza la funcion
    notas.push(8);
    notas.push(9);
    console.log(notas.length);
}

agregarNotas=function(nota){
    notas.push(nota);
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNotas(notaRecuperada);
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0; indice<notas.length; indice++){
        notaR=notas[indice];
        console.log(notaR);
    }

}