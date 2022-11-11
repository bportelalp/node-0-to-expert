import axios from "axios";

class Busquedas {
    historial = ['Madrid', 'Lugo'];
    constructor() {
        // TODO: Leer de bbdd
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiYnBvcnRlbGEiLCJhIjoiY2xhY281dzY3MDlqbTNwcGp4cHRqMDh4eCJ9.ofkSp3OKc96eGMyClqOQ0Q',
            'limit': 5,
            'language': 'es'
        }
    }

    async searchLocation(location = '') {
        try {
            // petición http
            const client = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`,
                params: this.paramsMapbox
            })

            const resp = await client.get();
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/lugo.json?proximity=ip&types=country%2Cregion%2Cdistrict%2Clocality%2Cplace&language=es&access_token=pk.eyJ1IjoiYnBvcnRlbGEiLCJhIjoiY2xhY281dzY3MDlqbTNwcGp4cHRqMDh4eCJ9.ofkSp3OKc96eGMyClqOQ0Q&limit=5');
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