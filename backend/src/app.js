const express = require("express");
const app = express();
const path = require('path');
const empCollection = require("../src/model/model.js");
const template_path = path.join(__dirname, "../template/views");
app.use(express.static(path.join(__dirname, '../frontend')));
require("./db/db.js");

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
     res.render('signup');
});

app.post('/empdata', async (req, res) => {
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    try {
        if (password === cpassword) {
            const empdata = new empCollection({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                cpassword: req.body.cpassword
            });
            const postData = await empdata.save();
        //   res.send(postData);
            res.send("you have succesfully rehisterd")
        } else {
            res.send("Passwords do not match");
        }
    } catch (error) {
        console.log(error);
        res.send("An error occurred");
    }
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.post("/loginpage", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const getuseremail = await empCollection.findOne({ email: email });

        if (!getuseremail) {
            return res.send("User not found");
        }

        if (getuseremail.password === password) {
         res.send("login successfully")
        } else {
            res.send("Login failed: Incorrect password");
        }
    } catch (error) {
        console.log(error);
        res.send("An error occurred");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
