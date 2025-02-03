require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send('hello World')
})

app.get('/login', (req, res) => {
    res.send('hello User')
})

app.get('/register', (req, res) => {
    res.send('Register Here')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})