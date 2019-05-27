const express = require('express')
const routes = express.Router()
const HeroeController = require('./controllers/HeroController')

routes.get('/heroes', HeroeController.index)
routes.get('/heroes/:id', HeroeController.show)
routes.post('/heroes', HeroeController.store)
routes.put('/heroes/:id', HeroeController.update)
routes.delete('/heroes/:id', HeroeController.delete)

module.exports = routes