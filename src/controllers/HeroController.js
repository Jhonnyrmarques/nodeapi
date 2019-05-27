const mongoose = require('mongoose')

const Heroe = mongoose.model('Heroes')

module.exports = {
    async index(req, res){
        const {page = 1 } = req.query

        const heroes = await Heroe.paginate({}, {page, limit: 10})
        

        return res.json(heroes)
    },
    async show(req, res){
        const heroe = await Heroe.findById(req.params.id)

        return res.json(heroe)
    },
    async store(req, res){
        const heroe = await Heroe.create(req.body)

        return res.json(heroe)
    },
    async update(req, res){
        const heroe = await Heroe.findByAndModify(req.params.id, req.body, {new: true})

        return res.json(heroe)
    },
    async delete(req, res){
        await Heroe.findOneAndDelete(req.params.id)

        return res.send()
    }
}