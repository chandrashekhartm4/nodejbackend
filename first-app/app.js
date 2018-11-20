const express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"chandru"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  
const app = express();

app.get('/data',(req,res)=>{
    // const user1 = { id: ['123','131433'],name:['dsfjdlsjflds','hkjhkjh']}
    // const user2 = { id : '1323',name:'dsfj323dlsjflds'}
    // let add = {id:'23', name:'mana'};
    let sql ='SELECT * FROM employeeidname ';
    let query = con.query(sql , (err, result)=>{
        if (err) throw err;

    res.status(333).json(result);
     });

});

app.listen('3000',()=>{
    console.log("server at port 3000")
})
