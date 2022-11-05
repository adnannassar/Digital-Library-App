const express = require("express");
const router = express.Router();
const users = require("../Models/users.js")
const books = require("../Models/books.js");
const booksKatalog = books.booksKatalog;
const myBooks = books.myBooks;



router.get('/', function (req, res) { res.render("login") });
router.get('/login', function (req, res) { res.render("login") });
router.get('/register', function (req, res) { res.render("register") });
router.get('/register', function (req, res) { res.render("register") });


router.post("/add-user", function (req, res) {
    if (users.some(u => u.username === req.body.username)) {
        res.render('404', { msg: 'Benutzer name ist besitzt, versucher Sie erneut!' });
    } else if (req.body.username.length === 0 && req.body.password.length === 0) {
        res.render('404', { msg: 'Bitte Benutzername und Passwort eingeben!' });
    }
    else if (req.body.username.length === 0) {
        res.render('404', { msg: 'Bitte Benutzername eingeben!' });
    }
    else if (req.body.password.length === 0) {
        res.render('404', { msg: 'Bitte Passwort eingeben!' });
    } else {
        users.push({
            id: users.length + 1,
            username: req.body.username,
            password: req.body.password
        });
        res.redirect('/login');
        console.log(users);
    }
})

router.get("/ebook-katalog", function (req, res) {
    res.render("Ebook-Katalog", { booksKatalog });
});




router.use(function (req, res) {
    res.status = 404;
    res.render('404', { msg: 'Diese Seite konnte nicht gefunden werden.' })
})


module.exports = router;