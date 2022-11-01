const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);

    if (empleado)
        callback(null, empleado);
    else
        callback('Empleado con id ' + id + ' no existe', null);
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id);

    if (salario)
        callback(null, salario);
    else
        callback('No hay salario para el id ' + id, null);
}

const id = 5

getEmpleado(id, (err, empleado) => {
    if (!err)
        console.log(empleado);
    else
        console.log(err);
});

getSalario(id, (err, salario) => {
    if (!err)
        console.log(salario);
    else
        console.log(err);
});