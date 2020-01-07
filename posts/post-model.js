const db = require('../data/db-config')

function find(user_id) {
  return db("posts") // posts as p
        .join("users", "users.id", "posts.user_id") // users as u
        .where({ user_id })
        .select("posts.id", "posts.contents", "users.username")
}
  
  
module.exports = {
    find,
}