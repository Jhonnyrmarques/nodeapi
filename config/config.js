const env = process.env.NODE_ENV || 'dev'

const config = ()=>{
    switch(env){
        case 'dev':
        return{
            bd_string: 'mongodb://jhonnym:minhasenhasecreta@localhost:27017/nodeapi',
        
        }

        case 'hml':
        return{

        }
        case 'prod':{
            return{

            }
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`)

module.exports = config()