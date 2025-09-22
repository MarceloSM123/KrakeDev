calcularPromedioNotas=function(){
    let nota1=recuperarFlorante("cmpNota1");
    let nota2=recuperarFlorante("cmpNota2");
    let nota3=recuperarFlorante("cmpNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    cambiarTexto("lblpromedio","PROMEDIO: "+promedio.toFixed(2));
}