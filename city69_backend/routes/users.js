const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const withAuth = require('../middlewares/auth');

// создание юзера
router.post('/', (req, res, next) => {
    const { login, password, name, surname, patronymic } = req.body;
    try {
        const user = new User({ login, password, name, surname, patronymic });
        user.save( function(err) {
        if(err) {
            console.log('[SAVE USER ERROR]', err)
            res.status(500).json({error: 'пользователь уже существует'})
        }
        else res.json({ message: 'регистрация прошла успешно.' })
        })
    } catch(error) {
        next(error);
    }
});

// аутентификацмя
router.post('/auth', async ( req, res, next ) => {
    const { login, password } = req.body;
    try {
        const user = await User.findOne( { login: login } );
        console.log(user);
        if( !user ) {
            res.json( { error:'Неправильная почта или пароль' } );
        }
        else {
            user.isCorrectPassword(password, function(err, same) {
                if( err ) {
                    console.log("[AUTH ERROR]", err)
                    res.json( { error: 'что-то пошло не так...' } );
                }
                else if( !same ) {
                    res.json( { error: 'неправильный логин или пароль' } );
                }
                else {
                    const userObj = user.toObject();
                    delete userObj.password;
                    const payload = { userObj };
                    const token = jwt.sign( payload, config.secret, {
                        expiresIn: '7d'
                    });
                    res.cookie('token', token, { httpOnly: true } ).status(200).json(userObj);
                }
            })
        }

  } catch (error){
      next(error)
  }
})

// выход
router.get('/logOut', (req, res, next) => {
  const token = req.cookies.token;
  res.clearCookie('token', token, { httpOnly: true } ).json({message: 'вы успешно вышли из системы.'});
})

//проверить авторизацию
router.get('/checkAuth',withAuth, (req, res, next) => {
    res.sendStatus(200);
})



module.exports = router;
