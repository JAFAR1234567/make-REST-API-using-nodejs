const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route")
//enabale cors,bodyParser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//users route
app.use("/users",usersRouter)
//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/./views/index.html')
});
//404 page route
app.use((req,res,next)=>{
    res.status(404).json({
        massage:'Route not Found'
    })
});
//server error handaling
app.use((error,req,res,next)=>{
    res.status(500).json({
        massage:'something problem in code'
    })
})
module.exports = app;
