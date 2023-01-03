/* import { connection } from "mongoose"; */

/* const mongoose = require("../database/indexx"); */
//const { v4: uuidv4 } = require('uuid');
/* const bcryptjs = require("bcryptjs"); */

/* const getAll = async () => {
    const db = await connection();
    return db.collection('usuarios').find().toArray();
}; */

/* const newUser = async ({ email, senha }) => {
    const db =await connection();
    const uuid = newUuid();
    await db.collection('usuaurios').insertOne({email, senha, uuid });
    return { email, uuid };
};

const userExists = async ({ email, uuid }) => {
    const db = await connection();
    let user = null;
    if (uuid) {
        user = await db.collection('usuarios').findOne({ uuid });
    } else {
        user = await db.collection('usuarios').findOne({email});
    }
    return user;
}; */



/* const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", async function(next) {
    const hash = await bcryptjs.hash(this, password, 10);
    console.log(this);
    console.log(hash);
    this.password = hash;

})

const User = mongoose.model("User", UserSchema); */

/* const login = async () => null;

export { getAll, login newUser, userExists };

module.exports = User; */