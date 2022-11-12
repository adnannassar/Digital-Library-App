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
router.get('/myBooks', function (req, res) { res.render("myBooks"), { myBooks } });
router.get('/ebook-einlegen', function (req, res) { res.render("ebook-einlegen") });



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
    }
});
router.post("/login-user", function (req, res) {
    if (req.body.username.length === 0 && req.body.password.length === 0) {
        res.render('404', { msg: 'Bitte Benutzername und Password eingeben!' })
    } else if (req.body.username.length === 0) {
        res.render('404', { msg: 'Bitte Benutzername eingeben!' });
    }
    else if (req.body.password.length === 0) {
        res.render('404', { msg: 'Bitte Passwort eingeben!' });
    } else {
        if (users.some(u => u.username === req.body.username) &&
            users.some(u => u.password === req.body.password)
        ) {
            res.redirect("/mybooks");
        } else {
            res.render('404', { msg: 'Etwas ist schief gelaufen, prüfen Sie bitte Ihre Eingabe, oder registrieren Sie sich neu!' });
        }
    }
});
router.post("/delete-book", function (req, res) {
    myBooks.splice(myBooks.indexOf(myBooks.find(b => b.isbn === parseInt(req.body.isbn))), 1);
    res.redirect("/mybooks");
});
router.post("/book-ausleihen", function (req, res) {
    if (myBooks.some(b => b.isbn === parseInt(req.body.isbn))) {
        res.render('404', { msg: 'Das Buch haben Sie schon!' })
    } else {
        myBooks.push({
            isbn: req.body.isbn,
            title: req.body.title,
            description: req.body.description,
            imgUrl: req.body.imgUrl,
            category: req.body.category
        });
        res.redirect("/myBooks");
    }
});
router.post("/add-book", function (req, res) {
    if (
        req.body.title.length === 0 ||
        req.body.description.length === 0 ||
        req.body.category.length === 0 ||
        req.body.imgUrl.length === 0 ||
        req.body.isbn.length === 0
    ) {
        res.render('404', { msg: 'Bitte alle Eingabe Felder eingeben' });
    } else {
        if (booksKatalog.some(b => b.isbn !== parseInt(req.body.isbn))) {
            booksKatalog.push({
                isbn: req.body.isbn,
                title: req.body.title,
                description: req.body.description,
                imgUrl: req.body.imgUrl,
                category: req.body.category
            });
            res.redirect("/ebook-katalog");
        } else {
            res.render('404', { msg: 'Das Buch ist schon vorhanden!, bitte prüfen Sie Ihre Eingabe bezüglich der ISBN-Nummer' });
        }
    }
});



















router.get("/ebook-katalog", function (req, res) {
    res.render("Ebook-Katalog", { booksKatalog });
});




router.use(function (req, res) {
    res.status = 404;
    res.render('404', { msg: 'Diese Seite konnte nicht gefunden werden.' })
})


module.exports = router;