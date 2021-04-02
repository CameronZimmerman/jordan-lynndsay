const client = require("./client.js");

client
  .query(
    `
  DROP TABLE IF EXISTS urls;
  CREATE TABLE urls (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  url VARCHAR(1024) NOT NULL
  );
  `
  )
  .then(() => console.log("table made"))
  .catch((err) => console.log(err));
