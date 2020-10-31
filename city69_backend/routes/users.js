const express = require('express');
const router = express.Router();
const UserRepository = require('../database/models/User/UserRepository');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const withAuth = require('../middlewares/auth');
const { getOne } = require('../database/models/User/UserRepository');

// создание юзера
router.post('/', async (req, res, next) => {
    const { login, password, name, surname, patronymic } = req.body;
    try {
        const user = await UserRepository.save(login, password, name, surname, patronymic);
        console.log(user)
        if(user.errorCode === 0) {
            res.json(user);
        }
        else res.json(user.toObject());
    } catch(error) {
        next(error);
    }
});

// аутентификацмя
router.post('/auth', async ( req, res, next ) => {
    const { login, password } = req.body;
    try {
        const user = await UserRepository.auth(login, password);
        console.log(user)
        if(user.errorCode === 0) {
            res.json(user);
        }
        else {
            const payload = user.toObject();
            const token = jwt.sign( payload, config.secret, {
                expiresIn: '7d'
            });
            res.cookie('token', token, { httpOnly: true } ).status(200).json(user.toObject());
        }
  } catch (error){
      next(error)
  }
})

router.get('/', async (req, res, next) => {
    try {
        const users = await UserRepository.get();
        const usersObjects = users.map(user => user.toObject());
        res.json(usersObjects);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await UserRepository.getOne(req.params.id);
        res.json(user.toObject());
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const user = await UserRepository.delete(req.params.id);
        res.json(user.toObject());
    } catch(error) {
        next(error);
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
