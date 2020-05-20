const express = require("express");
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  exposedHeaders: ["Content-Range", "X-Content-Range"],
};
app.use(cors(corsOptions));

app.get("/api", function (req, res) {
  res.json({ msg: "Response from Node Server" });
});

app.listen(8000, console.log("backend server"));
