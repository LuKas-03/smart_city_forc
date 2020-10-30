const jwt = require('jsonwebtoken');
const config = require('../config/config');

const withAuth = function(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        console.log('нет токена')
        res.json( { error: 'не авторизован' } );
    }
    else {
        jwt.verify(token, config.secret, function(err, decoded) {
            if(err) {
                console.log('некорректный токен', err)
                res.json( { error: 'не авторизован' } );
            }
            else {
                req.email = decoded.email;
                next();
            }
        })
    }
}

module.exports = withAuth;
