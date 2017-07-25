const knex = require("./db/knex");

module.exports = {
  getMessages: function() {
    return knex('message');
  }
};
