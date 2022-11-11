import axios from "axios";

class Busquedas {
    _mapboxKey = '';
    historial = ['Madrid', 'Lugo'];
    constructor(mapboxKey = '') {
        // TODO: Leer de bbdd
        this._mapboxKey = mapboxKey;
    }

    get paramsMapbox() {
        return {
            'access_token': this._mapboxKey,
            'limit': 5,
            'language': 'es'
        }
    }

    async searchLocation(location = '') {
        try {
            
            console.log('Pidiendo');
            // petición http
            const client = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`,
                params: this.paramsMapbox
            })

            const resp = await client.get();
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/lugo.json?proximity=ip&types=country%2Cregion%2Cdistrict%2Clocality%2Cplace&language=es&access_token=pk.eyJ1IjoiYnBvcnRlbGEiLCJhIjoiY2xhY281dzY3MDlqbTNwcGp4cHRqMDh4eCJ9.ofkSp3OKc96eGMyClqOQ0Q&limit=5');
            const result = resp.data.features.map(location => ({
                id: location.id,
                nombre: location.place_name,
                lng: location.center[0],
                lat: location.center[1]
            }));
            return result; // todas las cidudades que coincidan con el lugar
        } catch (error) {
            console.log('Error:', error);
            return [];
        }
    }
}



export {
    Busquedas
}