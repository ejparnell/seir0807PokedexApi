const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    name: { type: String, required: true },
    nickname: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

module.exports = mongoose.model('Pokemon', pokemonSchema)