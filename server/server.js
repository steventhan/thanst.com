const app = require("express")();
const api = require("./api");

const PORT = process.env.PORT || 4000;

app.use("/api", api);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
