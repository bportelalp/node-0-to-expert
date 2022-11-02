import colors from 'colors';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async () => {

    let opt = '';

    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear la tarea
                const newTask = await leerInput('Descripción de tarea:');
                tareas.crearTarea(newTask);
                console.log(tareas);
                break;
            case '2':
                console.log(tareas._listado);
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
            case '0':
                break;
        }
        await pausa();

    } while (opt !== '0');
    console.log('\nSaliendo\n');
}


main();