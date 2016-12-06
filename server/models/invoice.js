'use strict';

const faker = require('faker');

module.exports = function(Invoice) {

  Invoice.generate = function(owner, client, number) {
    return Invoice.create({
      title: faker.random.words(),
      createdat: new Date(),
      number: number,
      ownerid: owner.id,
      clientid: client.id,
    });
  };

};
