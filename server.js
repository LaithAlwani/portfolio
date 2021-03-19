const express = require("express");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 8080;

const app = express();
//express config
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// routes
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/email", (req, res) => {
  const inquiry = req.body;
  console.log(inquiry);
 
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "breanne.schmeler85@ethereal.email", // generated ethereal user
      pass: "6hjKadEGGDVY1vsZug" // generated ethereal password
    },
  });

  const mailOptions = {
    from: req.body.email, // sender address
    to: "breanne.schmeler85@ethereal.email", // list of receivers
    subject: "Request", // Subject line
    text: req.body.message, // plain text body
   
  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, response)=>{
    if(error){
      res.status(500).json("Internal server error")
    }else{
      res.json("Email sent!!")
    }
  });
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index");
});

//port listen
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
