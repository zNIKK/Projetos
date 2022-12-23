const PORT = 3000
const express = require('express');
apiRouter = require('./Routes/api');
const path = require('path');

const app = express()
app.use("/", apiRouter);

app.use("/new", express.static(path.join(__dirname, "public/new.html")));
app.use("/", express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("Server running on PORT 3000");
})

