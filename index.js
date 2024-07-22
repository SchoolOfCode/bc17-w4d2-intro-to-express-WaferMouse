import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({"message": "Hello World!"})
})

app.get('/hi', (req, res) => {
    res.send({"message": "hi World!"})
})

app.get('/howdy', (req, res) => {
    res.send({"message": "howdy World!"})
})

app.get('/frello', (req, res) => {
    res.send({"message": "frello World!"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})