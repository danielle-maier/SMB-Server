const express = require("express");
const router = express.Router();
const queries = require("../queries.js");
const bodyParser = require("body-parser");

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

router.post("/", (req, res) => {
  queries.addMessage(req.body)
    .then(function(messages) {
      res.json(messages);
    });
});

router.put("/:id", (req, res) => {
  queries.editMessage(req.params.id, req.body[0].message_body)
    .then(function(message) {
      res.json(message);
    });
  // let something = req.body[0].message_body;
  // res.json(something);
});

router.delete("/:id", (req, res) => {
  queries.deleteMessageByID(req.params.id)
    .then(function(messages) {
      res.json(messages);
    });
});

module.exports = router;
