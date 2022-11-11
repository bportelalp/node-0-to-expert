import axios from "axios";

class Busquedas {
    historial = ['Madrid', 'Lugo'];
    constructor() {
        // TODO: Leer de bbdd
    }

    async searchLocation(location = '') {
        try {
            // TODO: petición http
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            return []; // todas las cidudades que coincidan con el lugar
        } catch (error) {
            return [];
        }

    }
}



export {
    Busquedas
}