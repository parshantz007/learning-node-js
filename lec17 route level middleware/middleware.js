module.exports = reqFilter= (req,resp,next) => {
    if (!req.query.age) {
        resp.send("Please enter your age");
    }
    else if (req.query.age < 18) {
        resp.send("you are not allowed to this page");
    }
    else {
        next();
    }
}
