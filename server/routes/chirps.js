const express = require("express"), //getting exxpress into file
    chirpStore = require (".../chirpstore"), // adding in chirpstore 
    router = express.Router(); //subfunction of express router that helps use stay oragnized if user.js file was created

router.get("/", (res, req) => {
    res.send(chirpStore.GetChirps());
}); //gets the chirps ruturn them and then res.send chirpstore.getchirps back to the request

router.get("/:id", (req, res) => {
    res.send(chirpStore.GetChirps(req.params.id));//links to set paramaters
});

router.post("/", (req, res) => { //post request
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    };
    chirpStore.CreateChirp(chirpObj);//information of what chirp is going to be

    res.sendStatus(200);//sends status code response back

});

router.put("/:id", (req, res) => { //takes id from the params
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    };
    chirpStore.UpdateChirp(req.params.id, chirpObj);

    res.sendStatus(200);//sends stauts code responds 
});

router.delete("/:id", (res, req) => {
    chirpStore.DeleteChirp(req.params,id);

    res.sendStatus(200);//sends back status response
});

    module.exports = router; //creating router