const express = require("express");
require("dotenv").config();
const cors = require("cors")
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

app.get("/", async (req, res) => {
  // const result=await sendMail();
  res.send("Welcome to Gmail API with NodeJS");
});

app.use('/api', routes);