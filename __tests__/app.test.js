const client = require("../pg/client.js");
const setup = require("../pg/setup.js");
const request = require("supertest");
const app = require("../lib/app.js");

const runSetup = () => {
  require("child_process").fork("../pg/setup.js");
};

describe("route tests", () => {
  beforeAll(() => {
    return runSetup();
  });

  beforeAll(async () => {
    return await request(app).post("/api/urls").send({ url: "test.jpg" });
  });

  test("should create a url, respond with its content", () => {
    return request(app)
      .post("/api/urls")
      .send({ url: "dog.jpg" })
      .then((res) => {
        expect(res.body).toEqual({
          id: 2,
          url: "dog.jpg",
        });
      });
  });

  test("should grab all urls", () => {
    return request(app)
      .get("/api/urls")
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: 1,
            url: "test.jpg",
          },
          {
            id: 2,
            url: "dog.jpg",
          },
        ]);
      });
  });

  test("should update a url by id, respond with its content", () => {
    return request(app)
      .put("/api/urls/1")
      .send({ url: "tset.jpg" })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          url: "tset.jpg",
        });
      });
  });

  test("should delete a url by id", async () => {
    await request(app).delete("/api/urls/tset.jpg");
    await request(app).delete("/api/urls/dog.jpg");

    const getRes = await request(app).get("/api/urls");

    expect(getRes.body).toEqual([]);
  });
});
