const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (_req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${PORT}!`))