import * as fs from 'fs';

const archivo = './db/data.json'

const guardarDB = (data) => {

    fs.writeFileSync(archivo, data);
}

export {
    guardarDB
}