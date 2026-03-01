const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database : 'delta_app',
    password : 'Harish@#123',
});

// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };


//home route
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;

    try {
            connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", { count });
        });
    } catch(err) {
        console.log(err);
        res.send("some error in db");
    }
});

//Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, users) => {
            if(err) throw err;
            res.render("showusers.ejs", { users });
        });
    } catch(err) {
        console.log(err);
        res.send("some error in db");
    }
})

//Edit

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params; 
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch(err) {
        console.log(err);
        res.send("some error in db");
    }
  
});

// UPDATE Route

app.patch("/user/:id", (req, res) => {
    let { id } = req.params; 
    let {password : formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("wrong password");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                   if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch(err) {
        console.log(err);
        res.send("some error in db");
    }
});

///




app.listen("8081", ()=> {
    
    console.log("server is listening");
});


