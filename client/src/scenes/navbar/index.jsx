import { useState } from "react";
import {
    box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";

//icons
import {
    Search,
    Message,
    Darkmode,
    LightMode,
    Notification,
    Help,
    Menu,
    Close
} from "@mui/icons-material";

import { useDispatch, useNavigate, useSelector } from "react-router-dom";
import { setMode, setLogout } from "components/FlexBetween";

const Navbar = () => {
    const [ isMobileMenuToggled, setIsMobileMenuToggled ] = useState(false);  //small screen toggle
    const dispatch = useDispatch() //dispatch actions fromm reducer
    const Navigate = useNavigate();
    const user = useSelector 


    return <div>Navbar</div>
}
 
export default Navbar;