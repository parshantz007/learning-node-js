const express = require('express');

const app = express();

app.get("", (req, resp) => {
    resp.send(
        '<h1> welcome to home page</h1>'+
        '<a href="/about"> Go to about page</a>'
    )
})

app.get("/about", (req, resp) => {
    resp.send('    <input type="text" placeholder="User name"/> <button>Click me</button>   ');
})
app.get("/help", (req, resp) => {
    resp.send({
        name:"Parshant",
        contact:"9999999",
        email: "kaushikparshant6358@gmail.com"
    });
})

app.listen(5000);