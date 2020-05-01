const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => res.send('Hello Jade!'))

app.listen(port, () => console.log(`Jade course server listening at http://localhost:${port}`))
