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

    cargarTareasFromArray(tareas = []) {
        this._listado = {};
        tareas.forEach(t => {
            this._listado[t.id] = t;
        })
    }

    loadTareas(listadoJson) {
        this._listado = listadoJson;
    }


}

export {
    Tareas
};