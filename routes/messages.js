const express = require("express");
const router = express.Router();
const queries = require("../queries.js");

router.get("/", (req, res) => {
  queries.getMessages()
    .then(function(messages) {
      res.json(messages);
    });
});

router.get("/:id", (req, res) => {
  queries.getMessageByID(req.params.id)
    .then(function(message) {
      res.json(message);
    });
});


module.exports = router;
