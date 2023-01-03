import connection from './mongoConnection';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';

const SECRET = 'paralelepipedo';

const getAll = async () => {
   const db = await connection();
   return db.collection('usuarios').find().toArray();
};

//criando usuario
const newUser = async ({email, senha}) => {
    const db = await connection();
    const user = await db.collection('usuarios').insertOne({email, senha, });
    const { insertedId: _id } = user;
    return { email, _id };
};

//função pra ve se o usuario existe
const userExists = async ({email, id }) => {
    const db = await connection();
    let user = null;
    if (id) {
        user = await db.collection('usuarios').findOne({ _id: ObjectId(id) });
    } else {
        user = await db.collection('usuarios').findOne({email});
    }
    return user;
};

const deleta = async ({ id }) => {
    const db = await connection();
    await db.collection('usuarios').deleteOne({ _id: ObjectId(id) });
    return { id };
};

const update = async ({ id, email, senha}) => {
    const db = await connection();
    await db.collection('usuarios').updateOne({ _id: ObjectId(id) }, { $set: {email, senha } });
    return { id, email };
};

//consulta no banco de dados
const login = async ({email, senha}) => {
    const db = await connection();
    const user = await db.collection('usuarios').findOne({ email, senha });
    return user;
};

//parte da autenticação
const requestLogin = async (req, res) => {
    const {email, senha} = req.body;
    const usuario = await login({ email, senha});

    if (!usuario) return res.status(401).json({ message: 'Usuario não encontrado'});

    const { _id } = usuario;

    const newToken = jwt.sign(
        {
            userId: _id,
            email,
        },
        SECRET,
        {
            expiresIn: 1440,
        }
    );

    return res.status(201).json({ token: newToken });
};


export { getAll, login, newUser, userExists, deleta,update, requestLogin };
