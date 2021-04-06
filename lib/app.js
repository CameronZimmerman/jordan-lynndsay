const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/../build`));
app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname + "/../build/index.html"));
});

app.use("/api/urls", require("./controllers/urls.js"));

app.use(require("./middleware/error.js"));
app.use(require("./middleware/404.js"));

module.exports = app;
