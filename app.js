const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("in  middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000, () => {
  console.log("Listening to the port 3000.");
});
