'use strict';

const faker = require('faker');

module.exports = function(Account) {

  Account.generate = function() {
    return Account.create({
      email: faker.internet.email(),
      name: faker.name.findName(),
    });
  };

};
