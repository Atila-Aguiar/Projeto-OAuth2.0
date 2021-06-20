const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const Porta = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send("Hellow World")
})

app.listen(Porta)