const { Router } = require('express')
const { showPlayer, showPlayers, storePlayer, updatePlayer, destroyPlayer } = require('../controllers/UserController.js')

const routes = Router()

routes.get('/api/v1/player', showPlayers)

routes.get('/api/v1/player/id', showPlayer)

routes.post('/api/v1/player', storePlayer)

routes.put('/api/v1/player/id', updatePlayer)

routes.delete('/api/v1/player/id', destroyPlayer)

module.exports = routes