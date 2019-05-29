const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const config = require('./config/config')



const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(config.bd_string,
{useNewUrlParser: true})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

const port=process.env.PORT || 5000

app.listen(port, 'localhost', () =>{
    console.log(`Servidor Ativo na Porta ${port}`)
})