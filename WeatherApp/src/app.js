const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs")
const port = process.env.PORT || 9000;

// Public static path 
const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials")
app.set("view engine","hbs")
app.set("views",template_path)
app.use(express.static(staticPath))
hbs.registerPartials(partials_path)


// Routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Ops Page Not Found!"
    })
})

app.listen(port,()=>{
    console.log(`Listening the port number ${port}`);
})