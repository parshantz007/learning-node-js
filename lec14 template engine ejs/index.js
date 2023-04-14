const express = require('express');
const path = require('path');


const app=express();
const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');


app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})


////////////////////////////ejs///////////
app.get('/profile',(req,resp)=>{
    const user={
        name:"parshant",
        contact:"999999",
        email:"kaushikparshant6358@gmail.com"
    }
    resp.render(`profile`,{user});
})







app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/notFound.html`)
})

app.listen(5000);