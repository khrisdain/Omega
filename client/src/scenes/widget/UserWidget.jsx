import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOutlined,
    WorkOutLined,
    Satellite, 
} from "@mui/icons-material"

import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "component/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    
    //api to grab userImage 
    const getUser = async() => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser(); //get user will be called eveytime the page is rendered  
    }, []) //eslint-line react-hooks/exhaustive-deps

    if(!user){
        return null;
    }

    
    //items in userWidget 
    const { firstName, lastName, location, occupation, viewedProfile, impressions, friends } = user;

    return (
        <WidgetWrapper>
            {/*FIRST ROW */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath}/>
                    <Box>
                     <Typography
                      variant="h4"
                      color={dark}
                      fontWeight="500"
                      sx={{
                        "&:hover": {
                            color: palette.primary.light,
                            cursor: "pointer"
                        }
                      }}
                     >
                      {firstName} {lastName}
                     </Typography>

                     {/*no of friends  */}
                     <Typography color={medium}> {friends.length} </Typography>
                    </Box>
                    <ManageAccountsOutlined />
                </FlexBetween>

                <Divider />

                {/* SECOND ROW */}
                <Box p="1rem 0">
                 <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                  <LocationOutlined fontSized="large" sx={{ color:main}}/>
                 </Box>
                </Box>
            </FlexBetween>
        </WidgetWrapper>
    )

    
};

export default UserWidget 


