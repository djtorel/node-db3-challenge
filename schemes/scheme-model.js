const knex = require('knex');

const db = knex(require('../knexfile').development);

module.exports = {
  find: () => db('schemes'),
  findById: id =>
    db('schemes')
      .where({ id })
      .first(),
  findSteps: scheme_id =>
    db('steps')
      .where({ scheme_id })
      .orderBy('step_number', 'asc'),
};
