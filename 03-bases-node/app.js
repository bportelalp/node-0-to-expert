const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yars')

console.clear();

// extraer de la consola de comandos, el valor de Base. Esto sin yargs
// const [,,arg3] = process.argv
// const [,base = 5] = arg3.split('=')

// console.log(process.argv);
// console.log(argv);

const { base, limit, verbose } = argv;

crearArchivo(base, limit, verbose)
    .then(r => { if (verbose) console.log(r) })
    .catch(err => console.log(err));