exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Classes').insert([
        { id: 1, class: 'Juniors', age: '4-6', time: ''},
        { id: 2, class: 'Seniors', age: '7-15', time: ''},
      ])
    })
}
