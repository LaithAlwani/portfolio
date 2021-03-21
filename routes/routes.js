module.exports = function (app) {
    // routes
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
}