import fs from "fs";

const path = "src/asset";

const readDir = async(req,res) => {
    try{
        //Getting File names from Folder
        fs.readdir(path, (err,file) => {
            res.send(file);
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            err
        })
    }
}

export default {
    readDir
}