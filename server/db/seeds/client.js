
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Clients').insert([
        {id: 1, firstName: 'Ruby', lastName: 'Clarke', age: '6', phonePrimary: '123', phoneSecondary: '234', email: 'shereneclarke@spotlight.com', address: 'Tawa', medical: 'None', userType: 'Student', classes: 'Little'} ,
        {id: 2, firstName: 'Molly', lastName: 'Clarke', age: '4', phonePrimary: '', phoneSecondary: '', email: '', address: '', medical: '', userType: '', classes: ''},
        
      ]);
    });
};
