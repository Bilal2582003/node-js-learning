
const fs = require('fs')
// this is for make file by get input from console 
const arg = process.argv
if(arg[2] == 'add'){
 fs.writeFileSync(arg[3],arg[4])
 console.log('successfully added file')
}else if(arg[2] == 'remove'){
 fs.unlinkSync(arg[3])
 console.log('successfully removed file')
}else{
    console.log('invalid data');
}