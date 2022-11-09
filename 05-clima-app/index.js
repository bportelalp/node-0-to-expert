import colors from "colors";
import * as ui from "./helpers/inquirer.js";

console.log('Iniciando app\n');

const main = async () => {
    let opt = 0;
    do {
        opt = await ui.inquirerMenu();
        switch (opt) {
            case 1:
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