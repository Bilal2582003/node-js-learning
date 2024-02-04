// arrow function use arrow file use 
var arrow = require('./arrow-function')
var array =arrow.arr
var filteredItem = array.filter((item)=>{
    return item==2
})
console.log(filteredItem)