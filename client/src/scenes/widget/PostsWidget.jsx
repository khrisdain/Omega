import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)
}

export default Postswidget; 