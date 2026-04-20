function obtenerUsuarios(){
    setTimeout(() => {
        let usuario = {
            nombre : "martin",
            edad : 24
        }

        return usuario
    }, 2000);
}

console.log("iniciando busqueda")
let usuario = obtenerUsuarios()
console.log("usuario encontrado", usuario)
console.log("fin de la busqueda")