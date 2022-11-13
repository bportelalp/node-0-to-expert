import http from "node:http";


http.createServer((req, resp) => {
    console.log(req);

    resp.writeHead(200, {'Content-Type': 'text/plain'})
    resp.write(' Page not found');
    resp.end();
})
.listen(8080);


console.log('Escuchando el puerto ',8080);