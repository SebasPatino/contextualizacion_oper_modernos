// --------------------------------------------
// EJERCICIO 4
// --------------------------------------------

// Definimos el objeto inicial del estudiante
const estudiante = {
    nombre: "Laura",
    notas: [4.0, 3.8]
};

// Creamos la función actualizarNotas
// Recibe el objeto estudiante y un número indefinido de nuevas notas
function actualizarNotas(estudiante, ...nuevasNotas) {
    // Usamos spread para combinar las notas anteriores con las nuevas
    const notasActualizadas = [...estudiante.notas, ...nuevasNotas];

    // Retornamos un nuevo objeto (no modificamos el original)
    return {
        ...estudiante,              // copiamos todas las propiedades del objeto original
        notas: notasActualizadas    // reemplazamos el arreglo de notas con el nuevo
    };
}

// Llamamos a la función pasando el objeto y nuevas notas
const estudianteActualizado = actualizarNotas(estudiante, 4.2, 4.0);

// Mostramos en consola el objeto original
console.log("Objeto original:", estudiante);

// Mostramos en consola el nuevo objeto con las notas actualizadas
console.log("Objeto actualizado:", estudianteActualizado);