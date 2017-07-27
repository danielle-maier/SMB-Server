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

router.post("/", (req,res) => {
  let postDataObj = {};
  postDataObj.name = req.body.name;
  postDataObj.title = req.body.title;
  postDataObj.message_body = req.body.message_body;
  queries.addMessage(postDataObj)
  .then(function(messages){
    res.json(messages);
  });
});

router.put("/:id", (req,res) => {
  queries.editMessage(req.body.message_body)
  .then(function(message){
    res.json(message);
  });
});

router.delete("/:id", (req,res) =>{
  queries.deleteMessageByID(req.params.id)
  .then(function(messages){
    res.json(messages);
  });
});

module.exports = router;
