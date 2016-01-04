
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.integer('age');
    table.integer('experience');
    table.string('position');
  })
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTable('players')
};
