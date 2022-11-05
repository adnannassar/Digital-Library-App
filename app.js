const express = require("express");
const app = express();


const router = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static("public"));
app.use(router);
app.set('view engine', 'ejs');
app.set('views', 'views');

const port = 8030;
app.listen(port, function () {
    console.log(`Server is running on: localhost:${port}`);
});