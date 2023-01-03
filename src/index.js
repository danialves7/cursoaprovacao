import app from './app';

app.listen(3001, () => {
    console.log('Ouvindo a porta 3001')
});




/* const express = require('express');

const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const authenticateMiddleware = require("./middlewares/authenticate");

const app = express();

app.set('view engine', 'ejs')
app.use(express.json());

app.use("/auth", AuthController)
app.use("/admin", authenticateMiddleware , AdminController);

app.listen(3001, ()=>{
    console.log('Server is running');
}) */
