require('dotenv').config();
const express = require('express');
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send('hello World')
})

app.get('/login', (req, res) => {
    res.send('hello User')
})

app.get('/register', (req, res) => {
    res.send('Register Here')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})