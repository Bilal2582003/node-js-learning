const fs = require('fs')
    
const path = require('path');
var dir = path.join(__dirname)
  //  it is for read directory 
fs.readdir(dir,(err,items)=>{
 items.forEach((fileName)=>{
  console.log("file name is",fileName)
 })
})