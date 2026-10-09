const musicModel = require("../models/music.model");
const albulmModel = require("../models/album.model");

const jwt = require("jsonwebtoken");
const {uploadFile} = require("../services/storage.service")

async function createMusic(req,res){
    const {title} = req.body ;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.uri,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "Music created successfully ",
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })


}

async function createAlbum(req,res){
        const{title , musics} =req.body;

        const album = await albulmModel.create({
        title,
        artist: req.user.id,
        musics:musics,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id:album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        })
}

async function getAllMusics(req, res){
    const musics = await musicModel.find().limit(20).populate("artist","username email")

    res.status(200).json({
        message:"Musics Fetched Successfully"
        ,musics :musics,
    })
}

async function getAllAlbums(req,res){
    const albums = await albulmModel.find().select("title artist").populate("artist","username email").populate("musics")

    res.status(200).json({
        message:"Albums fetched successfully",
        albums: albums,
    })
}

async function getAlbumById(req,res){
    const albumId = req.params.albumId;

    const album = await albulmModel.findById(albumId).populate("artist", "username email")

    return res.status(200).json({
        message:"album fetched successfully ",
        album: album,
    })
}

module.exports = { createMusic , createAlbum , getAllMusics , getAllAlbums , getAlbumById};