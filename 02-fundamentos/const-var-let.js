// Crea variable en ámbito global
console.log('**var keyword**')
var nombre = 'Var-Wolverine';
if (true) {
    var nombre = 'Var-Magneto';
    console.log(nombre);
}
console.log(nombre);


// Crea variable de ambito local
console.log('\n\r**let keyword**')
let nombre2 = 'let-Wolverine';
if (true) {
    let nombre2 = 'let-Magneto';
    nombre2 = 'let-Magneto'; //Si no se pone let, va al scope superior, sacando let-wolverine
    console.log(nombre2);
}
console.log(nombre2);


// Crea variable constante o solo lectura (si es un objeto, no se puede reasignar)
console.log('\n\r**const keyword**')
const nombre3 = 'const-Wolverine';
if (true) {
    //nombre3 = 'let-Magneto'; Genera error
    const nombre3 = 'const-Magneto';
    console.log(nombre3);
}
console.log(nombre3);
