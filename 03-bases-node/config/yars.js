const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: "limit",
        type: 'number',
        demandOption: false,
        describe: 'Límite de tabla',
        default: 10
    })
    .option('v', {
        alias: 'verbose',
        type: 'boolean',
        demandOption: false,
        describe: 'Mostrar por consola',
        default: false
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv

module.exports = argv;