const express = require("express");
const router = express.Router();
const queries = require("../queries.js");

router.get("/", function(request, response, next) {
    queries.getMessages()
    .then(function(messages){
        response.json(messages);
    });
});

module.exports = router;
