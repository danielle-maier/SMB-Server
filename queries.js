const knex = require("./db/knex");

module.exports = {
  getMessages: function() {
    return knex('message');
  },
  getMessageByID: function(message_id){
    return knex('message')
    .where('id', message_id);
  }
};
