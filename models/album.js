const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Album = new Schema(
    {
        title: {type: String, required: true},
        year: {type: Number, required: true},
        totalTracks: {type: Number, required: true},
        genre: {type: String, required: false},
        avgRating: {type: Number, required: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('albums', Album)