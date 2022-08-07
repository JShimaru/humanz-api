const db = require('../db')
const Song = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const songs = [
        {album:'Demon Days', songName: 'Last Living Souls', length: '195', year: '2005', features: 'None'},
        {album:'Demon Days', songName: 'El Manana', length: '230', year: '2005', features: 'None'},
        {album:'Humanz', songName: 'Saturnz Barz', length: '181', year: '2017', features: 'Popcaan'},
        {album:'Humanz', songName: 'Let Me Out', length: '175', year: '2017', features: 'Pusha T & Mavis Staples'},
        {album:'Humanz', songName: 'Ascension', length: '155', year: '2017', features: 'Vince Staples'}
]

await Song.insertMany(songs)
console.log('imported song data')
}

const run = async () =>{
    await main()
    db.close()
}

run()