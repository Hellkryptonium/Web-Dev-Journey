const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//     console.log("Hi, I am middleware");
//     return next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "Access DENIED!");
}

// app.get("/wrong", (req, res) => {
//     abcd = abcd;
// });



app.get("/api", checkToken,(req, res) => {
    res.send("data");
});


app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

//logger
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//404

app.get("/err", (req, res) => {
    abcd = abcd;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access is Forbidden");
})

app.use((err, req, res, next) => {
    console.log("----- Error -----");
    let {status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
});



// app.use((req, res) => {
//     res.status(404).send("Page not found!");
// })

app.listen(8081, () => {
    console.log("server listening to port 8081")
});