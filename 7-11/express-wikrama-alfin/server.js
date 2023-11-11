const express = require("express");
const app = express();
const port = 7000;
app.get("/", (req, res) => {
  res.write("coba anjay");
  res.end();
});

app.get("/wikrama", (req, res) => {
  res.write("Hello Wikrama");
  res.end();
});

app.get("/about", (req, res) => {
  res.write("About");
  res.end();
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
