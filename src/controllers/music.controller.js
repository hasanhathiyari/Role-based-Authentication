const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const {uploadFile} = require("../services/storage.service")

async function createMusic(req,res){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Unauthorized user"})
    }

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if(decoded.role !== "artist"){
        return res.status(403).json({message: "Forbidden: you dont have acces to create a music"})
    }



    

    const {title} = req.body ;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.uri,
        title,
        artist: decoded.id,
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

    }catch(error){
        console.log(error);
        
        return res.status(401).json({message:"unauthorized"})
    }


}

module.exports = { createMusic }