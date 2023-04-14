const express = require('express');
const app = express();



const reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if (!req.query.age) {
        resp.send("Please Provide age");
    }
    else if(req.query.age<18)
    {
        resp.send("you cant access the page");
    }
    else {

        next();
    }
}

app.use(reqFilter);



app.get('/', (req, resp) => {
    resp.send("welcome to Home page");
})

app.get('/users', (req, resp) => {
    resp.send("welcome to Users page")
})

app.listen(5000);