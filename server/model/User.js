import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            lastName: 50,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 5,
        },
        picturPath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impression: Number, 
    },
    { timestamps: true} //shows date for changes
);

const User = mongoose.model("User", UserSchema);

export default User;