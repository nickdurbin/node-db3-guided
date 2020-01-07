const db = require("../data/db-config")

function find() {
	return db("users").select()
}

function findById(id) {
	return db("users")
		.where({ id })
		.first()
}

async function add(data) {
	// ** command is the same as the destructured command on line 18
	// const ids = await db("users").insert(data)
	// const id = ids[0]

	const [id] = await db("users").insert(data)
	return db("users").where({ id }).first()
}

async function update(id, body) {
	await db("users")
		.where({ id })
		.update(body)

	// we can utilize other functions in the model to avoid
	// calling them from the router
	return findById(id)
}

function remove(id) {
	return db("users").where({ id }).del()
}

module.exports = {
	find,
	findById,
	add,
	update,
	remove,
}