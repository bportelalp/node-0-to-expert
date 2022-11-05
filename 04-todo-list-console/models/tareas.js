/**
 * _listado:
 * objetos indexados por uuid
 */

import { Tarea } from "./tarea.js";
import colors from 'colors';

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
            listado.push(this._listado[t]);
        });

        return listado;
    }

    listadoCompleto() {
        // 1. tarea :: completada / pendiente...
        let result = '';
        const lista = this.listadoArr;
        lista.forEach((t, i) => {
            result += (`${`${i + 1}`.green}. ${t.description} ::: ${t.completadoEn === null? 'Pendiente'.red:'Completado'.green}\n`)
        })
        return result;
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