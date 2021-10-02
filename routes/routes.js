const { Router } = require('express')

const routes = Router()

routes.get('/api/v1/player', (req, res) => {
    console.log(req);
    res.send('Requeste type: GET (all players)')
})

routes.get('/api/v1/player/id', (req, res) => {
    console.log(req);
    res.send('Requeste type: GET (one player specific)')
})

routes.post('/api/v1/player', (req, res) => {
    res.send('Request type: POST (save player)')
})

routes.put('/api/v1/player/id', (req, res) => {
    res.send('Request type: PUT (update player)')
})

routes.delete('/api/v1/player/id', (req, res) => {
    res.send('Request type: DELETE (delete player)')
})

module.exports = routes