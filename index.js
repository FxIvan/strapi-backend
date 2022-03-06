const app = require('./app')

async function Main(){
    await app.listen(process.env.PORT)
        console.log('Escuchando desde el puerto:', process.env.PORT)
}

Main()