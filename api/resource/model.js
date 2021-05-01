// build your `Resource` model here
const db = require("../../data/dbConfig");

async function find() {
  return await db("resources");
}

async function insert(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return db("resources").where({ resource_id }).first();
}

module.exports = {
  find,
  insert,
};