import colors from 'colors';
import { inquirerMenu, leerInput, listadoTareasBorrar, pausa, confirmar } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";
console.clear();

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

    // Cargar del db fichero si existen
    var db = leerDB();
    if (db !== null) {
        tareas._listado = db;
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear la tarea
                const newTask = await leerInput('Descripción de tarea:');
                tareas.crearTarea(newTask);
                break;
            case '2':
                console.log(tareas.listadoCompleto());
                break;
            case '3':
                console.log(tareas.listarPendientesCopletadas(true));
                break;
            case '4':
                console.log(tareas.listadoCompleto(false));
                break;
            case '5':
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar(`¿Seguro que quieres borrar "${tareas._listado[id].descripcion}"?`)
                    if (ok)
                        tareas.deleteTarea(id);
                }

                break;
            case '0':
                break;
        }

        guardarDB(JSON.stringify(tareas._listado));
        await pausa();

    } while (opt !== '0');
    console.log('\nSaliendo\n');
}


main();