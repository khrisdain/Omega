 ///reuseable css component *scss* 

import { Box } from "@mui/material";
import { styled } from "@mui/system"; 

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center"
})

export default FlexBetween;