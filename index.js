const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');
const express = require ("express");
const app = express();
const path = require ("path");
const methodOverride = require("method-override");
require('dotenv').config();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));



// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'process.env.DB_PASSWORD'
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

//let q = "SHOW TABLES";
//Inserting new data
// let q = "INSERT INTO user(id, username, email,password) VALUES ?"; // four values are inter in to Array

// let data = [];
// for (let i=0; i<=100; i++){
//   data.push(getRandomUser());// 100 fake user data 
// }
//let users = [
//             ["123b","123_newuserb","abc@gmail.comb",  "abcb"],// users in array of array
//             ["123c","123_newuserc","abc@gmail.comc",  "abcc"],
//]; // real values that replace the ?



// create a route home route

app.get("/", (req, res) =>{
  let q = `select count(*) from user;`;
  try{
  connection.query(q, (err, result) =>{
  if (err) throw err;
  let count = result[0]["count(*)"];
  res.render("home.ejs", { count });

});
} catch (err){
  console.log(err);
  res.send("Some Error In DB")
}

});

// show user route (show route)
app.get("/user", (req, res) =>{
  let q = `select * from user`;
  try{
  connection.query(q, (err, users) =>{
  if (err) throw err;
  res.render("showusers.ejs", { users });
});
} catch (err){
  console.log(err);
  res.send("Some Error In DB")
}
});


//edit rout 

app.get("/user/:id/edit",(req,res)=>{
  let { id }= req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
   try{
  connection.query(q, (err, result) =>{
   if (err) throw err;
   let user = result[0];
   res.render("edit.ejs", { user });
  });
} catch (err){
  console.log(err);
  res.send("Some Error In DB")
}
});

//Update (DB) Route
app.patch("/user/:id", (req,res) => {
  let { id }= req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
   try{
    connection.query(q, (err, result) =>{
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password) {
        res.send("WRONG password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          res.redirect("/user");
        });
      }
    });
    }catch (err){
     console.log(err);
    res.send("Some Error In DB")
}
});

// server start
app.listen("8080", () => {
  console.log("server is listening tp port 8080");
});

// Fetchh & show total number of users on our app


