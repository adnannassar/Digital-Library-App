const express = require("express");
const app = express();


const router = require("./routes/routes");
//const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(router);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(8030, function () {
    console.log("Server is running on localhost:8030");
});