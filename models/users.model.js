const { v4: uuidv4 } = require("uuid");

const users = [
  { id: uuidv4(), name: "Anisul Islam", age: 34 },
  { id: uuidv4(), name: "Monirul Islam", age: 42 },
];

module.exports = users;