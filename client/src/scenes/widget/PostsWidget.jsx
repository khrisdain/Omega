import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)

    //Renders all posts
    const getPosts = async() => {
        const response = await fetch("http://localhost:3001/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }))
    }

    //Renders specific post
    const getUserPosts = async() => {
        const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }))
    };

    useEffect(() => {
        if(isProfile){
            getUserPosts();
        }
        else{
            getPosts();
        }
    }, []) //calls one

    return (
        <React.Fragment>
          {posts.map(
            ({
                _id,
                userId,
                firstName,
                lastName,
                description,
                location,
                picturePath,
                userPicturepath,
                likes,
                comments, 
            }) => (
                <PostWidget
                 key= {_id} 
                 PostId= {_id}
                 userId= {userId}
                 name= {`${firstName} ${lastName}`}
                 description= {description}
                 location= {location}
                 picturePath= {picturePath}
                 userPicturePath= { userPicturepath }
                 likes= {likes}
                 commnents= { comments }
                />
            )
          )}
        </React.Fragment>
    )
}

export default PostsWidget; 