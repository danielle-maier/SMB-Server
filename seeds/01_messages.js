exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 6;')
  .then(function() {

    var messages = [{
      id: 1,
      name: 'Dani',
      title: 'well well well',
      message_body: 'Let me out.'
    }, {
      id: 2,
      name: 'Dani',
      title: 'well...',
      message_body: 'This is not a dance'
    },{
      id: 3,
      name: 'Angela',
      title: 'wellichy',
      message_body: 'I am the one who\'s been here for far too long'
    },{
      id: 4,
      name: 'Angela',
      title: 'you can\'t be what you were',
      message_body: 'This is not a dance.'
    },{
      id: 5,
      name: 'Jamie',
      title: 'well well',
      message_body: 'In the midnight hour, she cried more more more'
    }];

    return knex('message').insert(messages);
  });
};
