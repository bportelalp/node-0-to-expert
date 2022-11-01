const fs = require('fs')

console.clear();
console.log('===============');
console.log('Tabla del 5:');
console.log('===============');
const base = 5;
let salida = '';

for (let i = 0; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}
    console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err)
        console.log('Hubo un error')
});