const client = require("../../pg/client.js");
module.exports = class Url {
  id;
  url;

  constructor(row) {
    this.id = row.id;
    this.url = row.url;
  }

  static async insert(url) {
    const {
      rows,
    } = await client.query(`INSERT INTO urls (url) VALUES ($1) RETURNING *`, [
      url.url,
    ]);
    const newUrl = new Url(rows[0]);
    return newUrl;
  }

  static async update(url, id) {
    const { rows } = await client.query(
      `
    UPDATE urls
    SET url = ($1)
    WHERE id = ($2)
    RETURNING *`,
      [url.url, id]
    );
    const newUrl = new Url(rows[0]);
    return newUrl;
  }

  static async get() {
    const { rows } = await client.query(`SELECT * from urls`);
    return rows;
  }

  static async delete(url, id) {
    const { rows } = await client.query(
      `
    DELETE FROM urls
    WHERE id = ($1)
`,
      [id]
    );
  }
};
