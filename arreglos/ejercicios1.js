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

calculoPromedio=function(){
    let sumarNotas=0;
    let promedio;
    for(let i=0;i<notas.length;i++){
        sumarNotas=sumarNotas+notas[i];
    }
    promedio=sumarNotas/(notas.length);
    return promedio;
}

ejecutarPromedio=function(){
    let promedio;
    promedio=calculoPromedio();
    mostrarTexto("lblPromedio",promedio);
}

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>uno</td></tr>"+"<tr><td>dos</td></tr></table>"
    cmpTabla.innerHTML=contenidoTabla;
}