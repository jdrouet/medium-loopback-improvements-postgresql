const faker = require('faker');
const lodash = require('lodash');
const {Account, Invoice, InvoiceItem} = require('./server/server.js').models;

const generate = () => {
  return Promise.all(lodash
    .times(5)
    .map(i => {
      return new Promise((resolve) => {
        process.nextTick(() => {
          return Account
            .generate()
            .then(generateClients)
            .catch(err => console.error(err))
            .then(resolve);
        });
      });
    }));
};

const generateClients = (owner) => {
  return Promise.all(lodash
    .times(lodash.random(5,10))
    .map(i => generateClient(owner)));
};

const generateClient = (owner) => {
  return Account
    .generate()
    .then(client => generateInvoices(owner, client));
};

const generateInvoices = (owner, client) => {
  return Promise.all(lodash
    .times(lodash.random(5, 10))
    .map(i => generateInvoice(owner, client, i)));
};

const generateInvoice = (owner, client, i) => {
  return Invoice
    .generate(owner, client, i)
    .then(generateItems);
};

const generateItems = (invoice) => {
  return Promise.all(lodash
    .times(lodash.random(10, 20))
    .map(() => InvoiceItem.generate(invoice)));
};

generate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
