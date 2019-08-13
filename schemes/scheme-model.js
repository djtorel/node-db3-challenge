const knex = require('knex');

const db = knex(require('../knexfile').development);

// Find all
const find = () => db('schemes');

const findById = id =>
  db('schemes')
    .where({ id })
    .first();

const findSteps = scheme_id =>
  db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id });

const add = async scheme => {
  try {
    const [newId] = await db('schemes').insert(scheme);
    return await findById(newId);
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (changes, id) => {
  try {
    const updateCount = await db('schemes')
      .update(changes)
      .where({ id });
    return updateCount ? await findById(id) : null;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
};
