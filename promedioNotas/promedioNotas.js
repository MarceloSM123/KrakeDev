calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("cmpNota1");
    let nota2=recuperarFlotante("cmpNota2");
    let nota3=recuperarFlotante("cmpNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    cambiarTexto("lblpromedio","PROMEDIO: "+promedio.toFixed(2));
}