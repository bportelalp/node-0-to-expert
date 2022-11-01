const nombre = 'Deadpool';
const real = 'Wade windston';

// Concatenacion
const normal = nombre + ' ' + real;
const template = `${nombre} ${real}`;

console.log('Normal: ' + normal);
console.log('Template: ' + template);

// Los templates tambien sirven para incluir un html
const html = `<h1>Hola</h1>\n\r<p>Mundo</p>`
console.log(html);