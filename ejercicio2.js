// --------------------------------------------
// EJERCICIO 2
// --------------------------------------------

// Creamos un arreglo inicial con algunos productos
const productos = ["teclado", "mouse", "pantalla"];

// Definimos una función llamada agregarProducto
// Recibe una lista (array) y un nuevo producto a añadir
function agregarProducto(lista, nuevoProducto) {

    // Usamos el operador spread (...) para copiar la lista existente
    // y agregar al final el nuevo producto
    const nuevaLista = [...lista, nuevoProducto];

    // Retornamos la nueva lista con el producto agregado
    return nuevaLista;    
}

// Llamamos a la función pasando la lista original y el nuevo producto "cpu"
// Guardamos el resultado en productosActualizados
const productosActualizados = agregarProducto(productos, "cpu");

// Mostramos en consola la lista original (sin cambios)
console.log("Lista original:", productos);

// Mostramos en consola la lista actualizada (con el nuevo producto agregado)
console.log("Lista actualizada:", productosActualizados);