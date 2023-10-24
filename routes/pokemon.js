const express = require('express')
const router = express.Router()
const pokemonCtrl = require('../controllers/pokemon')

router.post('/', pokemonCtrl.create)
router.get('/:id', pokemonCtrl.index)
router.patch('/:id', pokemonCtrl.updateNickname)
router.delete('/:id', pokemonCtrl.deletePokemon)

module.exports = router