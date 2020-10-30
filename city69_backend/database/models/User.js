const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const saltRounds = 10;



const schema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    patronymic: {
        type: String,
        required: true,
    },
    role: {
        type: String
    }
})

schema.pre('save', function (next) {
    if( this.isNew || this.isModified( 'password' ) ) {
        const user = this;
        bcrypt.hash( user.password, saltRounds , 
            function(err, hashedPassword) {
                if(err) {
                    next(err);
                }
                else {
                    user.password = hashedPassword;
                    next();
                }
            }
        );
    }
    else {
        next();
    }
})



schema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if(err) {
            callback(err);
        }
        else {
            callback(err, same);
        }
    })
}

module.exports = User = mongoose.model('User', schema);
