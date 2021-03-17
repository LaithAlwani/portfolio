const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.get("/portfolio", (req,res)=>{
    res.render("portfolio");
});
app.get("/contact", (req,res)=>{
    res.render("contact");
});
app.get("/", (req,res)=>{
    res.render("index");
});

app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`);
});