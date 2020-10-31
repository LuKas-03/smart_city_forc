const UserModel = require('./User');
const User = require('../../../Domain/UserDomain/User');
const jwt = require('jsonwebtoken');

class UserRepository {
    static get = async () => {
        try {
            const userModels = await UserModel.find();
            const users = userModels.map(userModel => User.modelToDomain(userModel));
            return users;
        } catch(error) {
            console.log('[GET USER ERR]', error);
            throw error;
        }
    };

    static save = async (login, password, name, surname, patronymic, cities, role) => {
        try {
            
            const userModel = await UserModel.save({login, password, name, surname, patronymic, cities, role});
            return User.modelToDomain(userModel);
        } catch(error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            console.log('[SAVE USER ERR]', error);
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const userModel = await UserModel.findById(id);
            return User.modelToDomain(userModel);
        } catch(error) {
            console.log('[GET ONE USER ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const userModel = await findByIdAndDelete(id);
            return User.modelToDomain(userModel);
        } catch(error) {
            console.log('[DELETE USER ERR]', error);
            throw error;
        }
    };

    static auth = async (login, password) => {
        let user;
        try {
            const userModel = await UserModel.findOne( { login: login } );
            if( !userModel ) {
                return { errorCode: 0, message:'Неправильный логин или пароль' };
            }
            else {
                const same = await userModel.isCorrectPassword(password);

                if( !same ) {
                    user = { errorCode: 0, message:'Неправильный логин или пароль' };
                }
                else {
                    user = User.modelToDomain(userModel);
                    console.log(user)
                }
            }
            console.log(user)
            return user;

        } catch (error) {
            throw error;
        }
    }

    static update = async (id) => {
        try {
            
        } catch(error) {
            
        }
    };
}

module.exports = UserRepository;