numerosAleatorios=function(){
    let aleatorio
    let numero;
    aleatorio=Math.random();
    numero=(aleatorio*100)+1;
    return numero;
}
generarAleatorios=function(){
    let aleatorios=[];  
    if(recuperarTexto("txtNumero")>=5 && recuperarTexto("txtNumero")<=20){
       for(let i=0;i<recuperarTexto("txtNumero");i++){
        console.log(i);
        aleatorios.push(numerosAleatorios());
       } 
       mostrarResutados(aleatorios);
    }
    
}

mostrarResutados=function(arregloNumeros){
    let componente;
    let cadena="<table><tr><th>NUMEROS</th></tr>";
    for(let i=0;i<arregloNumeros.length;i++){
        cadena+="<tr><td>"+arregloNumeros[i]+"</td></tr>";
    }
    cadena+="</table>";
    componente=document.getElementById("txtResultado");
    componente.innerHTML=cadena;
}