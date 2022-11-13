import http from "http";

http.createServer((req, resp) => {
    console.log(req);

    resp.writeHead(200, {'Content-Type': 'text/plain'})
    resp.write('Hola mundo');
    resp.end();
})
.listen(8080);


console.log('Escuchando el puerto ',8080);