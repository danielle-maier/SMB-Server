exports.up = function(knex, Promise) {
  return knex.schema.createTable("message", (message) => {
    message.increments("id");
    message.varchar("name").notNullable();
    message.varchar("title").notNullable();
    message.text("messageBody").notNullable();
    message.date("date").notNullable();
    message.timestamp("timestamp");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("message");
};
