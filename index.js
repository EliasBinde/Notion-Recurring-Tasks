import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/auth", (req, res) => {
  res.send(`recieved with params: ${req.query.code}`);
});

app.listen(80, () => {
  console.log("Example app listening on port 80!");
});
