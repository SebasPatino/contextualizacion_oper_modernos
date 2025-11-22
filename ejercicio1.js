// --------------------------------------------
// EJERCICIO 1
// --------------------------------------------

// Definimos una función llamada registrarUsuarios
// Recibe un objeto usuarioPrincipal y un número indefinido de usuarios adicionales
function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {

    // Usamos destructuración para extraer las propiedades nombre y edad del usuario principal
    const { nombre, edad } = usuarioPrincipal;
    
    // Mostramos en consola la información del usuario principal
    // y la cantidad de usuarios adicionales registrados
    console.log(
    `Usuario principal: ${nombre}, Edad: ${edad} - Usuarios adicionales registrados: ${usuariosAdicionales.length}`)
}

// Llamamos a la función registrarUsuarios
// El primer objeto corresponde al usuario principal
// Los demás objetos se consideran usuarios adicionales
registrarUsuarios(
    { nombre: "Juan", edad: 22 },       // Usuario principal
    { nombre: "Sebas", edad: 20 },      // Usuario adicional 1
    { nombre: "Karol", edad: 18 },      // Usuario adicional 2
    { nombre: "Nicolle", edad: 19 }     // Usuario adicional 3
);
