import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            `${'1.'.green} Crear tarea`,
            `${'2.'.green} Listar tareas`,
            `${'3.'.green} Listar tareas completadas`,
            `${'4.'.green} Listar tareas pendientes`,
            `${'5.'.green} Completar tarea(s)`,
            `${'6.'.green} Borrar tarea`,
            `${'0.'.green} Salir\n`
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(questions);
    return opt;
}


export {
    inquirerMenu
}