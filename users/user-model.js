const db = require('../data/db-config.js');

function find() {
  return db("users").select()
}

function findById() {
  return db('users').where({ id }).first()
}

module.exports = {
  find,
  findById,
  add, 
  update, 
  remove
}