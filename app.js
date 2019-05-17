// Name of the input file should be "uploadFile" in the HTML form
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// set storage
const storage = multer.diskStorage({
    destination:'./uploads',
    filename: function(req,file,callback){
        // uploadFile-timestamp.ext
        callback(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

// init upload
const upload = multer({
    storage: storage
}).single('uploadFile');

app.post('/api/upload', (req,res)=>{
    upload(req,res,(err)=>{
        let status = {
            success:false,
            filename:"",
            message:""
        };
        if(err){
            status.message=err.code;
        }else{
            status.filename=req.file.filename;
            status.success=true;
            status.message="successfully uploaded";
        }
        res.send(JSON.stringify(status))
    });
});

app.listen(port, ()=> console.log('Server started'));