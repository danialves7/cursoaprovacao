/* const express = require("express");
const { todos, criar } = require("./AuthController");
const router = express.Router();

const getAll = async (req, res) => {
    const users = await todos();
    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const { email, senha } = req.body;

    const user =await criar({ email, senha });
    return res.status(200).json(user);
};


/* router.get("/users", (req, res) =>{
    console.log('controller')
    return res.json({});
}) */



/* const login = async () => null;

export { getAll, login };

module.exports = router; */ 
