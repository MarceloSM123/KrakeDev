calcularTasaInteres=function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){
        tasa=16}
    else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=15;}
    else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=14;}
    else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=13;}
    else if(ingresoAnual>=2000000 ){
        tasa=12;}
    return tasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota;
    if(edad>50){
        valorCuota=0.30*(ingresos-egresos);
    } else if (edad<=50){
        valorCuota=0.40*(ingresos-egresos);
    }
    return valorCuota;
}

calcularDescuento=function(precio,cantidad){
let descuento;
    if(cantidad<3){
        descuento=0}
    else if(cantidad>=3 && cantidad<=5){
        descuento=2;}
    else if(cantidad>=6 && cantidad<=11){
        descuento=3;}
    else if(cantidad>=12){
        descuento=4;}
    return descuento;
}

determinarColesterolLDL=function(nivelColesterol){
    let nivel;
    let resultado;
    if(nivelColesterol<100){
        nivel=" normal";
    }else{
        nivel=" alto";}
    resultado= " Su nivel de colesterol LDL es: "+nivelColesterol+nivel;
    return resultado
}

validarClave=function(clave){
    let numeroCaracteres;
    numeroCaracteres=clave.length;
    if(numeroCaracteres>=8 && numeroCaracteres<=16){
        return true
    }else{
        return false
    }
}

esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65 && codigo<=90){
        return true
    }else{
        return false
    }
}

esDigito=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=48 && codigo<=57){
        return true
    }else{
        return false
    }
}