import { PersonAddOutlined, PersonRemoveOutline } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ friend, name, subtitle, userPicturePath}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.users);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends); 

    //color variables
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const  main = palette.neutral.main;
    const medium = palette.neutral.medium; 

    const isFriend = friends.find((friend) => friend._id ==== friendId)}

export default Friend; 