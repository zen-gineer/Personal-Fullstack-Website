var healthData = require('./health.json')
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/health', (req, res) => {
    console.log(healthData)
    res.send(healthData)
})
app.listen(3000)