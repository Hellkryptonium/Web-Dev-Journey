const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    htmlSTr = `<h1>welcome to the page of @${username}!</h1>`;
    res.send(htmlSTr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
})

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get(/.*/, (req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.use((req, res) => {
//     res.status(404).send("this path does not exist");
// })

// app.use((req, res) => {
//     //console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// })

