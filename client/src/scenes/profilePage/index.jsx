import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widget/FriendListWidget";
import MyPostwidget from "scenes/widget/MyPostWidget";
import PostsWidget from "scenes/widget/PostsWidget";
import UserWidget from "scenes/widget/UserWidget";


const ProfilePage = () => {
    const [ user, setUser ] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const getUser = async() => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        const data = await response.json();
        setUser(data)
    }
   
    useEffect(() => {
        getUser();
    }, []) //eslint-disable-line react-hooks/exhaustive-deps
}
 
export default ProfilePage;