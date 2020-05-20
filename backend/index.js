const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/api", function (req, res) {
  res.json({ msg: "Response from Node Server" });
});

app.delete("/api/delete", function (req, res) {
  res.json({ msg: "Deletion Response from Node Server" });
});

app.listen(port, console.log(`Node Server is running on port ${port}`));
