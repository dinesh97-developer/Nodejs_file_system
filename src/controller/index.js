import fs from "fs";

const path = "src/asset";
const writeFile = async (req,res) => {
    try{

        let dateTime = new Date();
        let content = dateTime.toISOString();
        let date = dateTime.getDate();
        let hour = dateTime.getHours();
        let min = dateTime.getMinutes();
        let sec = dateTime.getSeconds();
        let time = `${date}D-${hour}H${min}M${sec}S`;
        
        fs.writeFileSync(`${path}/${time}.txt`,content,"utf-8"); //Creating a file with content
        
        res.status(200).send({
            status:200,
            message:"Success",
            FileName:time,
            Content:content

        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            err
        });
    }
}

export default {
    writeFile
}