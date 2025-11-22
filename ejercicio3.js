// --------------------------------------------
// EJERCICIO 3
// --------------------------------------------

function mostrarDireccion(direccion) {
    try {
        // Destructuración del objeto
        const { ciudad, pais } = direccion;
        // Validación de propiedades
        if (!ciudad || !pais) {  
            throw new Error("La información de la dirección no es valida");
        }
        // Si todo está correcto, mostramos la dirección
        console.log(`Ciudad: ${ciudad}, País: ${pais}`);
    } catch (error) {
        // Captura del error personalizado
        console.error(error.message);
    }
}

// Ejemplo correcto
mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });

// Ejemplo incorrecto (faltan propiedades)
mostrarDireccion({ ciudad: "Bogotá" });