const express = require("express"),
    chirpsRouter = require("./chirps"),
    router = express.Router();

router.use("/chirps", chirpsRouter);//middleware that routes correct chirps for orgainiztion

module.exports = router;