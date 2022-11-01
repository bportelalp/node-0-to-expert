const { crearArchivo } = require('./helpers/multiplicar')
console.clear();

const base = 7;


crearArchivo(base)
    .then(r => console.log(r))
    .catch(err => console.log(err));