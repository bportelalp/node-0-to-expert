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
                var location = await ui.leerInput('Introduzca lugar a buscar: ');
                console.log(location);
                await busquedas.searchLocation(location);
                // Buscar lugar

                // Seleccionar lugar

                // Mostrar resultado
                console.log('Información de la ciudad\n'.green);
                console.log('Ciudad: ', );
                console.log('Lat: ', );
                console.log('Lon: ', );
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