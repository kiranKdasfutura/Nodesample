const fs =require('fs')
//read file
// fs.readFile('sample.txt','utf-8',(err,data)=>{
// console.log(data);
// })


//write file

// fs.writeFile('sample.txt','this file been modified',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('modified');
//     }
// })

//create or update /overwrite
fs.appendFile('sample.txt','\n hello moto',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file created');
    }
})

//rename file
fs.rename('./sample.txt','sampleTwo.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file renamed');
    }
})

//delete file
fs.unlink('./sample.txt',(err)=>{
    if(err){
        console.log(err,'err');
    }
    else{
        console.log("file deleted");
    }
})