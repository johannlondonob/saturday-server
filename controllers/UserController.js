const { request, response } = require('express')

function showPlayers(req = request, res = response) {
    res.json(
        {
            status: true,
            message: 'Lista de jugadores...'
        }
    )
}

function showPlayer(req = request, res = response) {
    res.json(
        {
            status: true,
            message: 'Mostrando un jugador requerido...'
        }
    )
}

function storePlayer(req = request, res = response) {
    res.json(
        {
            status: true,
            message: 'Registrando un jugador...'
        }
    )
}

function updatePlayer(req = request, res = response) {
    res.json(
        {
            status: true,
            message: 'Actualizando datos de un jugador...'
        }
    )
}

function destroyPlayer(req = request, res = response) {
    res.json(
        {
            status: true,
            message: 'Borrando registros de un jugador...'
        }
    )
}

module.exports = { showPlayers, showPlayer, storePlayer, updatePlayer, destroyPlayer }