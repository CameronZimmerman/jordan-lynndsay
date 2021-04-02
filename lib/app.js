const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.use("/api/urls", require("./controllers/urls.js"));

app.use(require("./middleware/error.js"));
app.use(require("./middleware/404.js"));

module.exports = app;
