// --------------------------------------------
// EJERCICIO 1
// --------------------------------------------

// function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {
//    const { nombre, edad } = usuarioPrincipal;

//    console.log(
//     `Usuario principal: ${nombre}, Edad: ${edad} - Usuarios adicionales registrados: ${usuariosAdicionales.length}`)
// }

// registrarUsuarios(
//   { nombre: "Juan", edad: 22 },
//   { nombre: "Sebas", edad: 20 },
//   { nombre: "Karol", edad: 18 },
//   { nombre: "Nicolle", edad: 19 } 
// );

// --------------------------------------------
// EJERCICIO 2
// --------------------------------------------

const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {
    const nuevaLista = [...lista, nuevoProducto];
    return nuevaLista;    
}

const productosActualizados = agregarProducto(productos, "cpu");
console.log("Lista original:", productos);
console.log("Lista actualizada:", productosActualizados);