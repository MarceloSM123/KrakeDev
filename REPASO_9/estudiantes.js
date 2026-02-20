
let estudiantes = [
    { id: "1001", nombre: "Ana López", correo: "ana.lopez@correo.com" },
    { id: "1002", nombre: "Carlos Ruiz", correo: "carlos.ruiz@correo.com" },
    { id: "1003", nombre: "Marta Gómez", correo: "marta.gomez@correo.com" }
];


cargar = function() {
    mostrarComponente("divRegistro");
    ocultarComponente("divLista");
    ocultarComponente("divEliminar");
    mostrarEstudiantes();
}


mostrarEstudiantes = function() {
    let estudiante = {};
    let tabla = "<table border='1' cellpadding='8' cellspacing='0' style='width:100%; border-collapse: collapse;'>" +
                "<tr style='background-color: #2d6a4f; color: white;'>" +
                "<th>ID</th><th>NOMBRE</th><th>CORREO</th></tr>";
    
    for(let i = 0; i < estudiantes.length; i++) {
        estudiante = estudiantes[i];
        tabla += "<tr>" + 
                 "<td>" + estudiante.id + "</td>" +
                 "<td>" + estudiante.nombre + "</td>" +
                 "<td>" + estudiante.correo + "</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    mostrarTextoHTML("tablaEstudiantes", tabla);
}


buscarEstudiante = function(id) {
    let estudiante = {};
    for(let i = 0; i < estudiantes.length; i++) {
        estudiante = estudiantes[i];
        if(estudiante.id == id) {
            return estudiante;
        }
    }
    return null;
}

validarNombre = function(nombre) {
    if(nombre == "") {
        mostrarTexto("errorNombre", "El nombre es obligatorio.");
        return false;
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        mostrarTexto("errorNombre", "El nombre solo puede contener letras y espacios.");
        return false;
    } else if(nombre[0] != nombre[0].toUpperCase()) {
        mostrarTexto("errorNombre", "La primera letra debe ser mayúscula.");
        return false;
    }
    mostrarTexto("errorNombre", "");
    return true;
}

validarCorreo = function(correo) {
    if(correo == "") {
        mostrarTexto("errorCorreo", "Ingrese un correo válido.");
        return false;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        mostrarTexto("errorCorreo", "Ingrese un correo válido.");
        return false;
    }
    mostrarTexto("errorCorreo", "");
    return true;
}

validarId = function(id) {
    if(id == "") {
        mostrarTexto("errorId", "El ID es obligatorio y debe tener solo números.");
        return false;
    } else if(!/^\d+$/.test(id)) {
        mostrarTexto("errorId", "El ID es obligatorio y debe tener solo números.");
        return false;
    }
    mostrarTexto("errorId", "");
    return true;
}
agregarEstudiante = function(estudiante) {
    let existe = buscarEstudiante(estudiante.id);
    
    if(existe != null) {
        for(let i = 0; i < estudiantes.length; i++) {
            if(estudiantes[i].id == estudiante.id) {
                estudiantes[i].nombre = estudiante.nombre;
                estudiantes[i].correo = estudiante.correo;
                break;
            }
        }
        mostrarTexto("mensajeGlobal", " ESTUDIANTE ACTUALIZADO");
    } else {
        estudiantes.push(estudiante);
        mostrarTexto("mensajeGlobal", " ESTUDIANTE AGREGADO");
    }
}


guardar = function() {
   
    let nombre = recuperarTexto("nombreInput");
    let correo = recuperarTexto("correoInput");
    let id = recuperarTexto("idInput");
    
   
    let validoNombre = validarNombre(nombre);
    let validoCorreo = validarCorreo(correo);
    let validoId = validarId(id);
    
    
    if(!validoNombre || !validoCorreo || !validoId) {
        mostrarTexto("mensajeGlobal", " Error en los campos. Revisa los mensajes.");
        return;
    }
    
    // Crear objeto estudiante
    let estudiante = {
        id: id,
        nombre: nombre,
        correo: correo
    };
    
    // Agregar o actualizar
    agregarEstudiante(estudiante);
    
    // Limpiar formulario
    mostrarTextoEnCaja("nombreInput", "");
    mostrarTextoEnCaja("correoInput", "");
    mostrarTextoEnCaja("idInput", "");
    

    mostrarTexto("errorNombre", "");
    mostrarTexto("errorCorreo", "");
    mostrarTexto("errorId", "");
    

    mostrarEstudiantes();
}


eliminarEstudiantePorId = function() {
    let idEliminar = recuperarTexto("eliminarIdInput");
    

    if(idEliminar == "") {
        mostrarTexto("errorEliminar", "Ingresa un ID para eliminar.");
        mostrarTexto("mensajeGlobal", "⚠️ Campo vacío. Ingresa un ID.");
        return;
    }
    

    let index = -1;
    for(let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i].id == idEliminar) {
            index = i;
            break;
        }
    }
    

    if(index == -1) {
        mostrarTexto("errorEliminar", "No se encontró un estudiante con ese ID.");
        mostrarTexto("mensajeGlobal", " No se encontró un estudiante con ese ID.");
        return;
    }
    

    estudiantes.splice(index, 1);
    

    mostrarTextoEnCaja("eliminarIdInput", "");
    mostrarTexto("errorEliminar", "");
    

    mostrarTexto("mensajeGlobal", "✅ Estudiante eliminado correctamente.");
    

    mostrarEstudiantes();
}

limpiarFormulario = function() {
    mostrarTextoEnCaja("nombreInput", "");
    mostrarTextoEnCaja("correoInput", "");
    mostrarTextoEnCaja("idInput", "");
    mostrarTexto("errorNombre", "");
    mostrarTexto("errorCorreo", "");
    mostrarTexto("errorId", "");
    mostrarTexto("mensajeGlobal", "🧹 Formulario limpiado.");
}

limpiarErrorNombre = function() {
    let nombre = recuperarTexto("nombreInput");
    validarNombre(nombre);
}

limpiarErrorCorreo = function() {
    let correo = recuperarTexto("correoInput");
    validarCorreo(correo);
}

limpiarErrorId = function() {
    let id = recuperarTexto("idInput");
    validarId(id);
}

limpiarErrorEliminar = function() {
    mostrarTexto("errorEliminar", "");
    mostrarTexto("mensajeGlobal", "⚡ Ingresa un ID y presiona Eliminar.");
}