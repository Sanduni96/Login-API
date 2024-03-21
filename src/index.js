const express = require ('express');
const pasth = require ("path");
const bcrypt = require ("bcrypt");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) =>  {
    res.render("login");
});
app.get ("/signup", (req, res) => {
    res.render("signup");
})

const port = 2000;
app.listen(port, () => {
 console.log('server running on port: 2000');
})
