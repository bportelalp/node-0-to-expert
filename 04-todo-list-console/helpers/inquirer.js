import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const { opt } = await inquirer.prompt(questions);
    return opt;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value) {
                if (value.length === 0) {
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const pausa = async () => {
    await inquirer.prompt({
        type: 'input',
        name: 'key',
        message: `Presione ${'ENTER'.green} para continuar`
    })
    console.log('\n');
    return;
}


export {
    inquirerMenu,
    pausa,
    leerInput
}