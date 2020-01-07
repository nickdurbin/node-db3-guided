const db = require("../data/db-config")

function find(user_id) {
	return db("posts as p") // FROM posts AS p
		.join("users as u", "u.id", "p.user_id") // INNER JOIN users AS u ON u.id = p.user_id
		.where({ user_id  }) // WHERE user_id = ?
		.select("p.id", "p.contents", "u.username") // SELECT p.id, p.contents, u.username
}

module.exports = {
	find,
}