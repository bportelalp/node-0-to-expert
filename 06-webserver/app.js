import express from "express";
const app = express();
const port = 8080;
app.get('/', (req, resp) => {
    resp.send('Hello');
})

app.get('*', (req, resp) => {
    resp.send('404 | Page not found');
})

app.listen(port, () => {
    console.log(`\n------Application listen to http://localhost:${port}-------`);
});