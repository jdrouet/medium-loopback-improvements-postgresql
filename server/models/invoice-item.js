'use strict';

const faker = require('faker');

module.exports = function(Invoiceitem) {

  Invoiceitem.generate = function(invoice) {
    return Invoiceitem.create({
      name: faker.commerce.product(),
      description: faker.commerce.productName(),
      price: faker.commerce.price(),
      quantity: faker.random.number(),
      invoiceid: invoice.id,
    });
  };

};
