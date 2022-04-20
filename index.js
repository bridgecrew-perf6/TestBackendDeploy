const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('This is backend 4')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})