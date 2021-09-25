const express = require( 'express' )

class ModelServer {
    constructor() {
        this.app = express()
        this.requestRouter()
    }

    initServer() {
        this.app.listen( process.env.PORT, () => {
            console.log( `Servidor encendido... ${ process.env.PORT }` )
        } )
    }

    requestRouter() {
        this.app.get( '/api/v1/player', ( req, res ) => {
            res.send( 'Requeste type: GET (all players)' )
        } )

        this.app.get( '/api/v1/player/id', ( req, res ) => {
            res.send( 'Requeste type: GET (one player specific)' )
        } )

        this.app.post( '/api/v1/player', ( req, res ) => {
            res.send( 'Request type: POST (save player)' )
        } )

        this.app.put( '/api/v1/player/id', ( req, res ) => {
            res.send( 'Request type: PUT (update player)' )
        } )

        this.app.delete( '/api/v1/player/id', ( req, res ) => {
            res.send( 'Request type: DELETE (delete player)' )
        } )
    }

    connectDB() {
    }

}

module.exports = ModelServer
