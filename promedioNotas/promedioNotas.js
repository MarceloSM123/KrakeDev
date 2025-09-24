calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("cmpNota1");
    let nota2=recuperarFlotante("cmpNota2");
    let nota3=recuperarFlotante("cmpNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    cambiarTexto("lblpromedio","PROMEDIO: "+promedio.toFixed(2));
    if(promedio<5 && promedio>0){
        cambiarImagen("cmpImagen","./imagen/fracaso.gif");
        cambiarTexto("cmpMensaje","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("cmpImagen","./imagen/buen-trabajo-good-job.gif");
        cambiarTexto("cmpMensaje","BUEN TRABANJO");
    } else if(promedio>8 && promedio<=10){
        cambiarImagen("cmpImagen","./imagen/yagane-gane.gif");
        cambiarTexto("cmpMensaje","EXCELENTE");
    } else{
        cambiarImagen("cmpImagen","./imagen/error-warning-computer-glitch-8h17x99p10ev461u.gif");
        cambiarTexto("cmpMensaje","DATOS INCORRECTOS");
    }
}