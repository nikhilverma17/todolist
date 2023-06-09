const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

let items = [];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let day = date.getDate();
    let day2=date.getTime();
    res.render("list", { listTitle: day, newListItems: items,listTitle1:day2 });


});

app.post("/", function (req, res) {
    let item = req.body.newItem;
        items.push(item);
        res.redirect("/");

});
app.get("/work", function (req, res) {
    let day2=date.getTime();
    res.render("list", { listTitle: "Work List", newListItems: workItems,listTitle1:day2 });
})

app.get("/about", function (req, res) {
    res.render("about");
});
app.get('/reset', function (req, res) {
    let item = req.body.newItem;
        items=[];
        res.redirect("/");
  });


app.listen(3000, function () {
    console.log("server is running on port 3000")
});