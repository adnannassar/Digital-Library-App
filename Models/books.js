class Book {
    constructor(isbn, title, description, imgUrl, category) {
        this.isbn = isbn;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.category = category;
    }
}


const book1 = new Book(1183001, "Technische Informatik 1", "Die beiden Bände Technische Informatik bieten einen verständlichen Einstieg" +
    "in dieses wichtige Teilgebiet der Informatik. Band 1 - Grundlagen der digitalen Elektronik führt in die für die Elektronik wichtigen" +
    "Gesetze der Physik und Elektrotechnik ein.", "img/book1.jpg", "Informatik");

let book2 = new Book(1183002, "Das Cafe am Runde der Welt",
    "Ein kleines Café mitten im Nirgendwo wird zum Wendepunkt im Leben von John, einem Werbemanager, der stets in Eile ist. Eigentlich will" +
    "er nur kurz Rast machen, doch dann entdeckt er auf der Speisekarte neben dem Menü des Tages drei Fragen", "img/book5.jpg", "Philosophie");

let book3 = new Book(1183003, "The Bes Websites to learn Pyton",
    "Learn coding and web development with these top Python courses and tutorials for beginners! Find out where to discover the best books, ideas," +
    "and tips for learning Python and Django for web development and practical coding projects.", "img/book2.jpg", "Coding");

let book4 = new Book(1183004, "Weltbester Informatik Student",
    "Dieses Notizbuch mit lustigem Spruch ist das perfekte Geschenk zum Studienbeginn! So ausgestattet kann man das erste Semester gut beginnen." +
    "Coole Geschenkidee zum Abitur, Schulabschluss oder zur bestandenen Prüfung. Jeder, der Informatik" +
    "und Programmieren liebt wird sich über dieses Buch freuen.", "img/book1.jpg", "Informatik");

let book5 = new Book(1183005, "Duden Informatik S1 Informatik Grundlagen",
    "Das Lehrwerk Informatik ist eine Überarbeitung von Informatik S I - Informatische Grundbildung." +
    "Neu sind Motivationsdoppelseiten zu Beginn eines jeden Kapitels. Alle Kapitel wurden mit Blick auf die Hard- und Software aktualisiert.", "img/book3.jpg", "Coding");


let book6 = new Book(1183006, "Clean Code",
    "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.", "img/book6.jpg", "Coding");

booksKatalog = [book1, book2, book3, book4, book5, book6];
myBooks = [book1, book3, book6];

module.exports = {
    booksKatalog,
    myBooks
}
