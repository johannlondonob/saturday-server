require('dotenv').config()

const ModelServer = require( './models/ModelServer.js' )
const serverPlayer = new ModelServer()

serverPlayer.initServer()
