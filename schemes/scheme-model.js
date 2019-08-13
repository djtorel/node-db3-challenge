const knex = require('knex');

const db = knex(require('../knexfile').development);

module.exports = {
  find: () => db('schemes'),
  findById: id =>
    db('schemes')
      .where({ id })
      .first(),
};
