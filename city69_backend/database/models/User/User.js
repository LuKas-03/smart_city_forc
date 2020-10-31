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
    cities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'City'
        }
    ],
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
    const thisPassword = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, thisPassword, function(err, same) {
            if(err) {
                reject(err);
            }
            else {
                resolve(same);
            }
        })
    })
}

module.exports = User = mongoose.model('User', schema);
