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

require("./routes/routes.js")(app);

//port listen
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
