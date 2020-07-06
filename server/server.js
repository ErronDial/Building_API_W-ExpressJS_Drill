const express = require("express"),
    apiRouter = require("./routes"),
    app = express();

app.use(express.json());
app.use("/api", apiRouter);  

app.listen(3000);