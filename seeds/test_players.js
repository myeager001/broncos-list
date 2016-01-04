
exports.seed = function(knex, Promise) {
  return Promise.all([
    // Deletes ALL existing entries
    knex('players').del(),

    // Inserts seed entries
    knex('players').insert({first_name: 'Peyton', last_name: 'Manning', age: 40, experience: 20, position: 'QB'}),
    knex('players').insert({first_name: 'Brock', last_name: 'Osiwiler', age: 28, experience: 5, position: 'QB'}),
    knex('players').insert({first_name: 'Demaryius', last_name: 'Thomas', age: 28, experience: 8, position: 'WR'}),
    knex('players').insert({first_name: 'Emanual', last_name: 'Sanders', age: 28, experience: 7, position: 'WR'}),
    knex('players').insert({first_name: 'CJ', last_name: 'Anderson', age: 24, experience: 3, position: 'RB'})
  ]);
};
