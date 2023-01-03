/* const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const UserModel = require("../models/User");

const router = express.Router();

const generateToken = (user = {}) => {
    return jwt.sign({
        id: user.id,
        name: user.name
    }, authConfig.secret , {
        expiresIn:86400
    });
}

const todos =async () => {
    const users = await getAll();
    return users;
}

const criar = async ({ email, senha }) => {
    const usuario = await userExists({email});

    if (usuario) return usuario;
     
    const user = await newUser({ email, senha});
    return user;
};



router.post("/register", async(req, res) =>{

    const {email} = req.body;

    if(await UserModel.findOne({email})) {
        return res.status(400).json({
            error:true,
            message:"Usuário já existe"
        })
    }

    const user = await UserModel.create(req.body);

    user.password = undefined;

    return res.json({
        user,
        token: generateToken(user)
    });

    return res.json({
        error: false,
        message:"Registrado com sucesso!",
        data: User
    });
})

//router.post("/authenticate", async(req, res)=>{
    const {email, password} = req.body;

    const user =  await UserModel.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            error: true,
            message: 'Usuário não encontrado'
        })
    }

    if(!await bcrypt.compare(password, user.password)){
         return res.status(400).send({
            error: true,
            message: 'Senha Inválida'
         })
    }

    user.password = undefined;

    return res.json({
        user,
        token: generateToken(user)
    });

    return res.json(user);

    console.log(user);

})

const login = async () => null;

export {todos, login, criar};


module.exports = router; */