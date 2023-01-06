import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widget/UserWidget";
import Navbar from "../navbar/index";


const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(Min-width: 10000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    return(
        <Box>
            <Navbar />
            <Box
              width="100%"
              padding="2rem 6%"
              display={ isNonMobileScreens ? "flex" : "block" }
              gap="0.5rem"
              justifyContent="space-between"
            >
              <Box flexBasis={ isNonMobileScreens ? "26%" : undefined}>
                <UserWidget userId={_id} picturePath={picturePath} />
              </Box>
              <Box
                flexBasis={isNonMobileScreens ? "42%" : undefined}
                mt={ isNonMobileScreens ? undefined : "2rem"}
              >
                <MyPostWidget picturePath={ picturePath } /> 
              </Box>
            </Box>
        </Box>
    ) 
}
 
export default HomePage;