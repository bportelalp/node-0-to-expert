const { crearArchivo } = require('./helpers/multiplicar')


console.clear();

// extraer de la consola de comandos, el valor de Base.
// 
const [,,arg3] = process.argv
const [,base = 5] = arg3.split('=')

crearArchivo(base)
    .then(r => console.log(r))
    .catch(err => console.log(err));