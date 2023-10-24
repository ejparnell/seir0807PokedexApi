const Pokemon = require('../models/pokemon')

async function create(req, res, next) {
    try {
        // saying that the req.body will have to be formatted:
        // { name: 'value', owner: 394759847528394572 }
        const pokemon = await Pokemon.create(req.body)
        res.status(201).json(pokemon)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function index(req, res, next) {
    try {
        const pokemon = await Pokemon.find({ owner: req.params.id })
        res.status(200).json(pokemon)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function updateNickname(req, res, next) {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        // { nickname: 'value' }
        pokemon.nickname = req.body.nickname
        await pokemon.save()
        res.status(200).json(pokemon)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function deletePokemon(req, res, next) {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        await pokemon.deleteOne()
        // pokemon.remove() -> as of mongoose v7 this method is no longer there
        res.status(200).json(pokemon)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

module.exports = {
    create,
    index,
    updateNickname,
    deletePokemon
}