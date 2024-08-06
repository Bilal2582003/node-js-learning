const mysql = require("mysql"); // 'mysql' instead of 'db'
const express = require("express");
const bodyParser = require("body-parser"); // 'body-parser' instead of 'body_parser'
const app = express();

app.use(bodyParser.json()); // To handle JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To handle URL-encoded bodies

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school-work",
});

connection.connect((err) => {
  if (err) {
    console.log("Connection Error!", err);
  } else {
    console.log("Connection run successfully.");
  }
});

app.listen(4000, (err) => {
  if (err) {
    console.log("missed port 4000.");
  } else {
    console.log("successfully port run 4000.");
  }
});

app.post("/add", (req, res) => {
  let { name, age, gender } = req.body;
  let sql = "INSERT into schoolwork set name = ?, age = ?, gender = ?";
  connection.query(sql, [name, age, gender], (err) => {
    if (err) {
      res.status(500).send({status:false,message:"insert error!",error:err});
    } else {
      res.status(200).send({status:true,message:"inserted successfully."});
    }
  });
});
app.get('/get',(req,res)=>{
connection.query("select * from schoolwork ",(err,result)=>{
  if(err){
    res.status(500).send({status:false,message:"Error! ",error:err,data:[]});
  } else {
    res.status(200).send({status:true,message:"successfully found.",data:result});
  }
})
})