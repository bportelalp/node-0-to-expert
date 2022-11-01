


const fs = require('fs')

const crearArchivo = async (base, limit = 10) => {
    try {
        let salida = '';
        salida += '===============\n';
        salida += 'Tabla del:' + base + '\n';
        salida += '===============\n';

        for (let i = 0; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`results/tabla-${base}.txt`, salida);

        return `results/tabla-${base}.txt`
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearArchivo
}