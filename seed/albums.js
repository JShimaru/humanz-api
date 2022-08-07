const db = require('../db')
const Album = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        {title: 'Demon Days', year: '2005', totalTracks: '15', genre: 'unspecified', avgRating: '9'},
        {title: 'Humanz', year: '2017', totalTracks: '20', genre: 'Alternative', avgRating: '7'},
        {title: 'Plastic Beach', year: '2010', totalTracks: '16', genre: 'unspecified', avgRating: '9'},
        {title: 'Gorillaz', year: '2001', totalTracks: '18', genre: 'unspecified', avgRating: '9'},
        {title: 'Song Machine, Season One: Strange Timez', year: '2020', totalTracks: '17', genre: 'unspecified',  avgRating: '8'}
    ]

await Album.insertMany(albums)
console.log("Albums loaded!")
}

const run = async () =>{
    await main()
    db.close()
}

run()