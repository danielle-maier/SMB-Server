const express = require("express");
const router = express.Router();
const queries = require("../queries/queries.js");

router.get("/", function(request, response, next) {
    queries.getMessages()
    .then(function(messages){
        response.json(messages);
    });
});

router.get("/:id", function(request, response, next) {
    queries.getmessage(request.params.id)
    .then(function(message){
        response.json(message);
    });
});


module.exports = router;
