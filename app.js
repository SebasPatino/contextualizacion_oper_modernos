function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {
   const { nombre, edad } = usuarioPrincipal;

   console.log(
    `Usuario principal: ${nombre}, Edad: ${edad} - Usuarios adicionales registrados: ${usuariosAdicionales.length}`)
}

registrarUsuarios(
  { nombre: "Juan", edad: 22 },
  { nombre: "Sebas", edad: 20 },
  { nombre: "Karol", edad: 18 },
  { nombre: "Nicolle", edad: 19 } 
);