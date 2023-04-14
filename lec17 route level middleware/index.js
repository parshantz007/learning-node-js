const express = require('express');
const reqFilter = require('./middleware');
const route=express.Router();

const app = express();


route.use(reqFilter);




app.get('', (req, resp) => {
    resp.send("this is home page");
})
app.get('/user', (req, resp) => {
    resp.send("this is user page");
})
route.get('/about', reqFilter, (req, resp) => {
    resp.send("this is about page");
})
route.get('/contact', reqFilter, (req, resp) => {
    resp.send("this is contact page");
})


app.use('/',route);


app.listen(5000);
