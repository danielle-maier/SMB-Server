exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 6;')
  .then(function() {

    var messages = [{
      id: 1,
      name: 'Dani',
      title: 'well well well',
      messageBody: 'Let me out.'
      // createdAt: new Date(),
      // updatedAt: new Date()
    }, {
      id: 2,
      name: 'Dani',
      title: 'well...',
      messageBody: 'This is not a dance'
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      id: 3,
      name: 'Angela',
      title: 'wellichy',
      messageBody: 'I am the one who\'s been here for far too long'
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      id: 4,
      name: 'Angela',
      title: 'you can\'t be what you were',
      messageBody: 'This is not a dance.'
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      id: 5,
      name: 'Jamie',
      title: 'well well well',
      messageBody: 'In the midnight hour, she cried more more more'
      // createdAt: new Date(),
      // updatedAt: new Date()
    }];

    return knex('message').insert(messages);
  });
};
