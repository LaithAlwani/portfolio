const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

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

app.post("/submit", (req, res) => {
  const inquiry = req.body;
  //send the values via email.
  res.redirect("/#contact");
});

app.get("/", (req, res) => {
  res.render("index");
});

//port listen
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
