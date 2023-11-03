import mongoose from 'mongoose';
const Schema = mongoose.schema;

const userSchema = new Schema({
    username: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("userprofile", UserSchema)