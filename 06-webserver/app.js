import http from "http";


http.createServer((req, resp) => {

    resp.write('hola mundo');
    resp.end();
})
.listen(8080);


console.log('Escuchando el puerto ',8080);