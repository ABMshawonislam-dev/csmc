const express = require("express");
var cors = require("cors");
const app = express();

// middleware start
app.use(cors());
app.use(express.json());
// middleware end

app.get("/", function (req, res) {
  res.send("Hello MERN");
});

app.listen(8000, () => {
  console.log(`Running on port 8000`);
});
