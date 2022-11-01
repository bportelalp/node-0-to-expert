const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Bruno'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500)
}

getUsuarioById(10, (user) => {
    console.log(user.nombre.toUpperCase());
})