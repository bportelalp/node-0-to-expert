const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// Desestructurar para extraer constantes de un objeto
function imprimeHeroe(heroe) {
    const { nombre, apellido, poder, edad = 0 } = heroe; // Asignable a edad, que es undefined, un valor por defecto
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(deadpool);

function imprimeHeroeDesestructurado({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroeDesestructurado(deadpool);


// Desestructurar desde un array
const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
// console.log(h1, h2, h3);

const [h1, , h3] = heroes; // Si pongo coma, es que omito ese del medio
console.log(h1, h3);