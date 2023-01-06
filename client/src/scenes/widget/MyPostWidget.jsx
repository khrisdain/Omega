import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined
} from "@mui/icons-material"

import { 
    Box, 
    Divider, 
    Typography, 
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery
} from "@mui/material"

import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSlector } from "react-redux";
import { setPosts } from "state";

const MyPostwidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [isimage, setIsimage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme 
}