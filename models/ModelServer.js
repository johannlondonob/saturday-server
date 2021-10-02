const express = require('express')
const { connectDatabase } = require('../database/connection')
const routes = require('../routes/routes.js')

class ModelServer {
    constructor() {
        this.app = express()
        this.initDatabase()
        this.router()
    }

    initServer() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor encendido... ${process.env.PORT}`)
        })
    }

    router() {
        this.app.use('/', routes)
    }

    initDatabase() {
        connectDatabase()
    }

}

module.exports = ModelServer
