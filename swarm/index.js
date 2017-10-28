const express = require("express");
const Redis = require("redis");

const app = express();
const redis = Redis.createClient({
  host: "redis"
});

app.get("/", (req, resp) => {
  redis.incr("fuck", (err, val) => {
    if (err) {
      resp
        .type("html")
        .status(400)
        .send("Redis has failed");
    } else {
      resp.type("html").send(`Count ${val}`);
    }
  });
});

app.get("/some", (req, resp) => {
  resp.json({
    data: {
      name: "Oleg Medoed",
      age: 27
    }
  });
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Here we go on 8080");
});
