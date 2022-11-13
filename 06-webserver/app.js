import express from "express";
import path from "path";
const app = express();
const port = 8080;
const __dirname = path.resolve();

// Ejecutar middleware para redirecion a contenido estático
app.use(express.static('public'));


app.get('/index', (req, resp)=>{
    resp.sendFile(__dirname + '/public/index.html')
})

app.get('/generic', (req, resp)=>{
    resp.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, resp)=>{
    resp.sendFile(__dirname + '/public/elements.html')
})


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