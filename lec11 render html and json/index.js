const express = require('express');

const app = express();

app.get("", (req, resp) => {
    resp.send(
        '<h1> welcome to home page</h1>' +
        '<a href="/about"> Go to about page</a>'
    )
})

app.get("/about", (req, resp) => {
    resp.send(`
        <input  placeholder="User name" value="${req.query.name}">
        <a href="/" >Go to home page</a>
    `);
})
app.get("/help", (req, resp) => {
    resp.send({
        name: "Parshant",
        contact: "9999999",
        email: "kaushikparshant6358@gmail.com"
    });
})

app.listen(5000);