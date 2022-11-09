import colors from "colors";
import * as ui from "./helpers/inquirer.js";

console.log('Iniciando app\n');

const main = async () => {
    const texto = await ui.leerInput("Cosas");
}

await main();