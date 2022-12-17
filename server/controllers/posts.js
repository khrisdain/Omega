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
        });
        await newPost.save() //save to monogoDB 

        const post = await Post.find(); //Grabs all the post which is sent to the frontend
        res.status(201).json(post);
    }catch(err){
        res.status(409).json({ message: err.message })
    }
}

/* READ */
export const getFeedPosts = async(req, res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({ message: err.message })
    }
};


export const getUserPosts = async(req, res) => {
    try{
        const { userId } = req.params;

        const post = await Post.find({ userId }) //return sepcific post from data collection 
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({ message: err.message })
    }
}

/* UPDATE */
export const likePost = async(req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body //req.body is how request is sent from the frontend 
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId) //checks if post has been liked by users id

        if(isLiked){
            post.likes.delete(userId) //delete likes if user already likes it
        }
        else{
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id, 
            {likes: post.likes},
            {new: true},
        );

        res.status(201).json(updatedPost)
    }catch(err){
        res.status(404).json({ message: err.message })
    }
}