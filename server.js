const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')



const app = express()
app.use(express.json())

mongoose.connect('mongodb://jhonnym:minhasenhasecreta@localhost:27017/nodeapi',
{useNewUrlParser: true})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

const port=process.env.PORT || 5000

app.listen(port, 'localhost', () =>{
    console.log(`Servidor Ativo na Porta ${port}`)
})