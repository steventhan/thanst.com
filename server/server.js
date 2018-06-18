const express = require("express");
const app = express();
const path = require("path");
const api = require("./api");

const PORT = process.env.PORT || 4000;
app.use(express.static("./build"));

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
