const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const HeroesSchema = new mongoose.Schema({
    name:{
        type: String, required: true
    },
    description:{
        type: String, required: true
    },
    powers:{
        type: String, required: true
    },
    movie:{
        type: String, required: true
    },
    createAt:{
        type: Date, default: Date.now
    }
})

HeroesSchema.plugin(mongoosePaginate)

mongoose.model('Heroes', HeroesSchema)