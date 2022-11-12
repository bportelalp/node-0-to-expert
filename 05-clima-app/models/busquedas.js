import axios from "axios";

class Busquedas {
    _mapboxKey = '';
    historial = [];
    constructor(mapboxKey = '', weatherKey = '') {
        // TODO: Leer de bbdd
        this._mapboxKey = mapboxKey;
        this._weatherKey = weatherKey;
    }

    get paramsMapbox() {
        return {
            'access_token': this._mapboxKey,
            'limit': 5,
            'language': 'es'
        }
    }

    createParamsWeather(lat, lon){
        return {
            'appid': this._weatherKey,
            'lat': lat,
            'lon':lon,
            'units': 'metric',
            'lang': 'es'
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

    setLastResul(location = {}){
        this.historial.unshift(location);
        this.historial = this.historial.slice(0,5);
    }

    async searchWeather(lat, lon){
        try {
            
            console.log('Pidiendo');
            // petición http
            const client = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: this.createParamsWeather(lat, lon)
            })

            const resp = await client.get();
            console.log(resp.data)
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/lugo.json?proximity=ip&types=country%2Cregion%2Cdistrict%2Clocality%2Cplace&language=es&access_token=pk.eyJ1IjoiYnBvcnRlbGEiLCJhIjoiY2xhY281dzY3MDlqbTNwcGp4cHRqMDh4eCJ9.ofkSp3OKc96eGMyClqOQ0Q&limit=5');
            const result = {
                estado: resp.data.weather[0].description,
                temp: resp.data.main.temp,
                tempMin: resp.data.main.temp_min,
                tempMax: resp.data.main.temp_max,
            }
            return result; 
        } catch (error) {
            console.log('Error:', error);
            return [];
        }
    }

    _farenheitToCelsius(farenheit = 0){
        const result = (farenheit - 32)*5 / 9;
        return result;
    }

    _kelvinToCelsius(kelvin = 0){
        return kelvin - 273;
    }
    
}



export {
    Busquedas
}