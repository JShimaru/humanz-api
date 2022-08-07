const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Song = new Schema(
    {
        album: {type: String, required: true},
        songName: {type: String, required: true},
        length: {type: Number, required: true},
        year: {type: Number, required: true},
        features: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Songs', Song)