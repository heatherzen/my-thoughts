const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'Username is required'
    },
    email: {
        type: String, 
        unique: true,
        required: 'Email is required',
        match: [/.+@.+\..+/]
    },
    thoughts: [],
    friends: []

});

const User = model('User', UserSchema);

module.exports = User