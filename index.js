let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
