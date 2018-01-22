const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstname: 'Olusola',
    lastname: 'Oseni',
    email: process.env.EMAIL,
    password: bcrypt.hashSync(process.env.PASSWORD, 10),
    isAdmin: true,
    role: 'superadmin',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', [{
    firstname: 'Olusola'
  }])
};
