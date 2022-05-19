let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
//read users
const getAlluser = (req, res) => {
  res.status(200).json({ users });
};
//create User
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json({ users });
};
//update User
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, age } = req.body;
  const item = users
    .filter((user) => user.id === userId)
    .map((selecedUser) => {
      selecedUser.name = name;
      selecedUser.age = age;
    });
  res.status(200).json({ users });
};

//delete User
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  
  res.status(200).json({ users });
};
module.exports = { getAlluser, createUser, updateUser, deleteUser };
