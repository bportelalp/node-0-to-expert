import colors from "colors";
import * as ui from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
    let opt = 0;
    const busquedas = new Busquedas(process.env.MAPBOX_KEY);
    do {
        opt = await ui.showMenu();
        switch (opt) {
            case 1:
                // prompt
                const searchtext = await ui.leerInput('Introduzca lugar a buscar: ');
                const locations = await busquedas.searchLocation(searchtext);
                // Buscar lugar

                // Seleccionar lugar
                const selected = await ui.listLocation(locations)
                if(selected === 0)
                    break;

                const place = locations.find(l => l.id === selected);
                
                // Mostrar resultado
                console.log('Información de la ciudad\n'.green);
                console.log('Ciudad: ', place.nombre);
                console.log('Lat: ', place.lat);
                console.log('Lon: ', place.lng);
                console.log('Temperatura: ', );
                console.log('Minima: ', );
                console.log('Maxima: ', );
                break;
            case 2:
                break;
            default:
                break;
        }

        await ui.pausa();
    } while (opt !== 0);
}

await main();