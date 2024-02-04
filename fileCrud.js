const fs = require('fs')
    
const path = require('path');
var dir = path.join(__dirname,'files')

    //crud function with file
var filePath = `${dir}/hello.js`;

 fs.writeFileSync(filePath,'This is simple txt for testing') 

    // read file data 
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

//    update data in file 
// fs.appendFile(filePath,' `and i am adding more data`',(err)=>{
//     if(!err){
//         console.log("file is updated sucessfully")
//     }else{
//         console.log("Error!")
//     }
// })

//   for rename file
//   fs.rename(filePath,`${dir}/newfile.js`,(err)=>{
//     if(!err){
//         console.log("file name is updated sucessfully")
//             }else{
//                 console.log("Error!")
//             }
//   })

  // for delete file 
// fs.unlinkSync(dir+"/newfile.js")