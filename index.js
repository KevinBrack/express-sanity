const express = require("express");
const app = express();
const PORT = process.env.port || 9000;

app.get("/", (req, res) => {
  res.status(200).send("Sanity check!");
});

app.listen(PORT, () => console.log(`Sanity check running on port ${PORT}`));
