import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widget/UserWidget";
import MyPostWidget from "scenes/widget/MyPostWidget";
import Navbar from "../navbar/index";
import PostWidget from "scenes/widget/PostWidget";
import AdvertWidget from "scenes/widget/AdvertWidget";
import FriendListWidget from "scenes/widget/FriendListWidget";



const HomePage = () => {
    const isNonMobileScreens =useMediaQuery("(min-width: 1000px)")
    const { _id, picturePath } = useSelector((state) => state.user);
    return(
        <Box>
            <Navbar />
            <Box 
              width="100%" 
              padding="2rem 6%" 
              display={ isNonMobileScreens ? "flex" : "block" } 
              gap="1rem"       
            >
              <Box flexBasis={ isNonMobileScreens ? "26%" : undefined}>
                <UserWidget userId={ _id} picturePath={picturePath} />
              </Box>

              <Box flexBasis={isNonMobileScreens ? "42%  " : undefined} mt={ isNonMobileScreens ? undefined : "2rem"}>
                <MyPostWidget picturePath={picturePath}  />
              </Box>

              {isNonMobileScreens && (
                <Box flexBasis="26%">
                 <AdvertWidget />
                 <Box m="2rem 0" />
                 <FriendListWidget userId ={_id} />
                </Box>
              )}
            </Box>
        </Box>
    ) 
}
 
export default HomePage;