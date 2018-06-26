const express = require("express");
const path = require("path");
const compression = require("compression");

const api = require("./api");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(compression());
app.use(express.static("./build"));
app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
