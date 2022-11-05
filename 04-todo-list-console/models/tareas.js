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
        const lista = this.listadoArr;
        return this._estilizar(lista)
    }

    listarPendientesCopletadas(completadas = true) {
        var tasks = this.listadoArr.filter(t => {
            if (!completadas)
                return t.completadoEn === null
            else
                return t.completadoEn !== null
        })

        return this._estilizar(tasks);
    }

    _estilizar(lista) {
        // 1. tarea :: completada / pendiente...
        let result = '';
        lista.forEach((t, i) => {
            result += (`${`${i + 1}`.green}. ${t.description} ::: ${t.completadoEn === null ? 'Pendiente'.red : t.completadoEn.green}\n`)
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