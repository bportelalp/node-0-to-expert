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


}

export {
    Tareas
};