exports.up = function(knex, Promise) {
  return knex.schema.createTable("message", (message) => {
    message.increments("id");
    message.varchar("name").notNullable();
    message.varchar("title").notNullable().unique();
    message.text("messageBody").notNullable();
    message.dateTime('createdAt').notNullable().defaultTo(knex.raw('now()'));
    message.dateTime('updatedAt').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("message");
};
