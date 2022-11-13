import express from "express";
import path from "path";
const app = express();
const port = 8080;
const __dirname = path.resolve();

// Ejecutar middleware para redirecion a contenido estático
app.use(express.static('public'));



// esto no se ejecuta porque ya sirvio el static en la ruta inicial
app.get('/', (req, resp) => {
    resp.send('Hello');
})


// Redirigir a la not found
app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/notfound.html');
})

app.listen(port, () => {
    console.log(`\n------Application listen to http://localhost:${port}-------`);
});