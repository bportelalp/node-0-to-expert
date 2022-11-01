const colors = require('colors')
const fs = require('fs')

const crearArchivo = async (base, limit = 10, verbose = false) => {
    try {
        let salida = '';
        salida += '===============\n';
        salida += 'Tabla del:' + base + '\n';
        salida += '===============\n';

        for (let i = 0; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (verbose)
            console.log(colors.green(salida));
        fs.writeFileSync(`results/tabla-${base}.txt`, salida);

        return `Exported on: results/tabla-${base}.txt`
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearArchivo
}