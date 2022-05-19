const {getAlluser,createUser, updateUser, deleteUser }= require("../controllers/users.controller");
const router = require("express").Router();

//read all user
router.get("/", getAlluser);
//create user
router.post("/",createUser);
//update user
router.put("/:id",updateUser);
//delete user
router.delete("/:id",deleteUser);
module.exports = router;
