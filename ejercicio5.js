// --------------------------------------------
// EJERCICIO 5
// --------------------------------------------

// Función para agregar varios ítems a la lista
function agregarItems(lista, ...items) {
    // Usamos spread para crear una nueva lista
    const nuevaLista = [...lista, ...items];
    return nuevaLista;
}

// Función para obtener información de un ítem
function obtenerInfo(item) {
    try {
        // Destructuración de propiedades
        const { id, nombre, precio } = item;

        // Validación: si falta alguna propiedad, lanzamos un error
        if (!id || !nombre || !precio) {
            throw new Error("La información del ítem no es válida");
        }

        // Si todo está correcto, mostramos la información
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    } catch (error) {
        // Captura del error y mensaje claro
        console.error(error.message);
    }
}

// Lista inicial de ítems
const inventarioInicial = [
    { id: 1, nombre: "Xbox Series X", precio: 999 },
    { id: 2, nombre: "Mando Xbox", precio: 399 }
];

// Agregamos varios ítems a la vez
const inventarioActualizado = agregarItems(
    inventarioInicial,
    { id: 3, nombre: "Playstation 5", precio: 929 },
    { id: 4, nombre: "Mando Playstation", precio: 329 }
);

// Mostramos en consola las listas para verificar inmutabilidad
console.log("Inventario inicial:", inventarioInicial);
console.log("Inventario actualizado:", inventarioActualizado);

// Consultamos la información de un ítem válido
obtenerInfo(inventarioActualizado[2]);

// Consultamos la información de un ítem inválido (faltan propiedades)
obtenerInfo({ id: 5, nombre: "Nintendo Switch" });