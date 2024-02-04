const { promises } = require('dns');
var a = 10
 var b = 11
 var promissData = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    b=[10,30,40]
    resolve(b)
  },1000)
 })
 promissData.then((data)=>{
  console.log(data)
  for(var i =0;i<data.length; i++){
    console.log(`Arrya first count ${a} + ${data[i]} = ` + (a + data[i]))
  }
 })
 console.log(a+b)