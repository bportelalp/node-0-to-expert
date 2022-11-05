/**
 * _listado:
 * objetos indexados por uuid
 */

import { Tarea } from "./tarea.js";

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(description = '') {
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }


    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(t => {
            listado.push(this._listado[t].description);
        });

        return listado;
    }

}

export {
    Tareas
};