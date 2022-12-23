const PORT = 3000;
const express = require("express");
const apiRoutes = require("./routes/api.js");
const path = require("path");

const app = express();

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log("server running on port", PORT);
})
