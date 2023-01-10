import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true, 
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map, //MongoDB maps it out
            of: Boolean, //Boolean to check if it exists 
        },
        comments: {
            type: Array,
            default: []
        },
    },
    { timestamps: true }
);

mongoose.set("strictQuery", false)

const Post = mongoose.model("Post", postSchema);

export default Post; 