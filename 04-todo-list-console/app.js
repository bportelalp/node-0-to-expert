import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js';
import {pausa} from './helpers/mensajes.js'

console.clear();

const main = async () => {

    let opt = '';

    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log({opt});

    } while (opt !== '0');
    console.log('\nSaliendo\n');
}


main();