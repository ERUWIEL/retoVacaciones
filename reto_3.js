/**
 * Función para crear un marco decorativo con asteriscos
 * @param {Array} names - Arreglo de nombres a colocar en el marco
 * @returns {String} Marco decorativo con los nombres
 */
function createFrame(names) {
    if (names.length === 0) return "";

    // buscamos la longitud maxima de los strings de nuestro array
    let maxLength = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > maxLength) {
            maxLength = names[i].length;
        }
    }
    // definimos el ancho del marco usando el maximo encontrado
    const frameWidth = maxLength + 4;

    // creamos los bordes sup/inf del marco con un bucle
    let border = "";
    for (let i = 0; i < frameWidth; i++) {
        border += "*";
    }

    // creamos el contenido del marco
    let content = "";
    for (let i = 0; i < names.length; i++) {
        let name = names[i];

        let spaces = "";
        const spacesNeeded = maxLength - name.length;
        for (let j = 0; j < spacesNeeded; j++) {
            spaces += " ";
        }

        // construir la línea y agregar salto de línea
        content += "* " + name + spaces + " *\n";
    }

    // armamos el sanwich
    return border + "\n" + content + border;
}

// EJEMPLO 1
console.log("Ejemplo 1: createFrame(['Playa', 'Cabañas', 'Snorkel'])");
console.log(createFrame(['Playa', 'Cabañas', 'Buseo']));
