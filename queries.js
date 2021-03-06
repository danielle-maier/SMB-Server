const knex = require("./db/knex");

module.exports = {
  getMessages: function() {
    return knex('message');
  },
  getMessageByID: function(message_id) {
    return knex('message')
      .where('id', message_id);
  },
  deleteMessageByID: function(message_id) {
    return knex('message')
      .where('id', message_id)
      .del();
  },
  addMessage: function(postData) {
    return knex('message')
      .insert(postData)
      .returning('id');
  },
  editMessage: function(message_id, editedMessageBody) {
    return knex('message').where('id', message_id)
    .update("message_body", editedMessageBody);
  }
};
