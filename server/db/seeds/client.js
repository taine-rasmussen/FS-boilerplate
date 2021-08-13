
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Clients').insert([
        {id: 1, firstName: 'Ruby', lastName: 'Clarke', dob: '01.12.2010', age: '6', medicalNeeds: 'None', contactOneName: 'Sherene', contactOneNumber: '123' , contactTwoName: 'Barry', contactTwoNumber: '234', email: 'shereneclarke@spotlight.com', how: 'Newsletter'} ,
        {id: 2, firstName: 'Molly', lastName: 'Clarke', dob: '19.03.2015', age: '4', medicalNeeds: 'None', contactOneName: 'Sherene', contactOneNumber: '123' , contactTwoName: 'Barry', contactTwoNumber: '234', email: 'shereneclarke@spotlight.com', how: 'Newsletter'} ,
        
      ]);
    });
};
