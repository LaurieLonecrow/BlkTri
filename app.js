const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const fs = require("fs");
fs.readFile("products.json", function (err, data) {
  if (err) throw err;
     const products = JSON.parse(data);

app.get("/", function(req,res){
  res.render("load");
})

app.get("/home", function(req,res){
  res.render("home", {products: products});
})

app.get("/blktri", function(req, res){
  res.render("blktri");
})

app.get("/contact", function(req, res){
  res.render("contact");
})

app.get("/shop", function(req, res){
  res.render("shop", {products: products});
})

app.get("/productpage", function(req, res){
  res.render("productpage", {products: products});
})

app.get("/productpage/:productId", function(req, res){
  const requestedProduct = (req.params.productId);

  products.forEach(function(product){
    const storedProduct = (product.id);

    if (storedProduct === requestedProduct){
      res.render("productpage", {
        title: product.title,
        imageUrl: product.imageUrl,
        description: product.description,
        price: product.price
      });
    };
  });


});


});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
