const Album = require('../models/album')
const Song = require('../models/song')

const getAllAlbums = async (req,res) => {
    try{
        const albums = await Album.find()
        return res.status(200).json({albums})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const createAlbum = async (req,res) => {
    try{
        const album = new Album(req.body)
        await album.save()
        return res.status(201).json({album})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getAlbumById = async (req,res) => {
    try{
        const {id} = req.params
        const album = Album.findById(id)
        if(album){
            return res.status(200).json({album})
        }
        return res.status(404).send("Album not found!")
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const updateAlbumById = (req,res) => {
    try{
        const {id} = req.params
        Album.findByIdAndUpdate(id, req.body, {new: true},(err,album) =>{
            if(err !== null){
                console.log(err, 'error')
                res.status(404).send(message)
            }else{
                console.log(album)
                res.json(album)
            }
        })
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const deleteAlbumById = async (req,res) => {
    try{
        const {id} = req.params
        const deleteAlbum = await Album.findByIdAndDelete(id)
        if(deleteAlbum){
            return res.status(200).send("Album deleted!")
        }
        throw new Error("Album not found!")
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getAllSongs = async (req,res) => {
    try{
        const song = await Song.find()
        return res.status(200).json({song})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getSongById = async (req,res) => {
    try {
        const {id} = req.params
        const song = await Song.findById(id)
        if(song){
            return res.status(200).json({song})
        }
        return res.status(404).send("Song not found!")
    }catch(err){
        return res.status(500).json({error:err.message})        
    }
}

const addSong = async (req,res) => {
    try{
        const song = new Song(req.body)
        await song.save()
        return res.status(201).json({song})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const updateSongById = (req,res) => {
    try{
        const {id} = req.params
        Song.findByIdAndUpdate(id, req.body, {new: true}, (err,song) =>{
            if(err !== null){
                console.log(err, 'error')
                res.status(404).send(message)
            }else{
                console.log(song)
                res.json(song)
            }
        })
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const deleteSongById = async (req,res) => {
    try{
        const {id} = req.params
        const songGone = await Song.findByIdAndDelete(id)
        if(songGone){
            res.status(200).send('Song deleted!')
        }
        throw new Error('Song not found!')
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

module.exports = {
    getAllAlbums,
    getAlbumById,
    createAlbum,
    updateAlbumById,
    deleteAlbumById,
    getAllSongs,
    getSongById,
    addSong,
    updateSongById,
    deleteSongById
}