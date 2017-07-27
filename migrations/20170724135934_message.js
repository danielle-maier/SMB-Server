exports.up = function(knex, Promise) {
  return knex.schema.createTable("message", (message) => {
    message.increments("id");
    message.varchar("name").notNullable();
    message.varchar("title").notNullable().unique();
    message.text("message_body").notNullable();
    message.dateTime("created_at").notNullable().defaultTo(knex.raw('now()'));
    message.dateTime("updated_at").notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("message");
};
