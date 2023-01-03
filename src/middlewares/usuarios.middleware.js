import jwt from 'jsonwebtoken';
const SECRET = 'paralelepipedo';


function VerififyToken(req, res, next) {
    const token = req.headers.authorization;

    jwt.verify(token, SECRET, (err) => {
        if (err) {
        return res.status(401).json({message: 'Token invalido'})
        }
        return next();
    });
}

export default VerififyToken;
