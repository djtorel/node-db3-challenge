const knex = require('knex');

const db = knex(require('../knexfile').development);

module.exports = {
  find: () => db('schemes'),
  findById: id =>
    db('schemes')
      .where({ id })
      .first(),
  findSteps: scheme_id =>
    db('steps as st')
      .join('schemes as sc', 'sc.id', 'st.scheme_id')
      .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
      .where({ scheme_id }),
};
