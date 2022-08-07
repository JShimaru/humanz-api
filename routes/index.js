const {Router} = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req,res)=>res.send('This is the root!'))

router.get('/albums', controllers.getAllAlbums)

router.get('/albums/:id', controllers.getAlbumById)

router.post('/albums', controllers.createAlbum)

router.put('/albums/:id', controllers.updateAlbumById)

router.delete('/albums/:id', controllers.deleteAlbumById)

router.get('/songs', controllers.getAllSongs)

router.get('/songs/:id', controllers.getSongById)

router.post('/songs', controllers.addSong)

router.put('/songs/:id', controllers.updateSongById)

router.delete('/songs/:id', controllers.deleteSongById)

module.exports= router;