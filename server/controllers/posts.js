import Post from "../model/Post.js";
import User from "../model/User.js";

/* CREATE */
export const createPost = async ( req, res ) => {
    try{
        const { userId, description, picturePath } = req.body; //from schema
        const user = await User.findById(userId)
        const newPost = newPost({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
    }catch(err){
        res.status(409),json({ message: err.message })
    }
}