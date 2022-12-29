import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogin } from 'state';
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

//from mongoose schema 
const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("invalid mail").required("required"),
    location:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required")
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

const initialValuesLogin= {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobileScreens= useMediaQuery("min-width: 600px");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    
    const handleFormSubmit = async(values, onSubmitProps) => {};

    return (
        <Formik
            onSubmit={ handleFormSubmit }
            initiaValues= { isLogin ? initialValuesLogin : initialValuesRegister }
            validationSchema = { isLogin ? loginSchema : registerSchema }
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplatecolumns="repeat(4, minmax(0, 1r))"
                        sx={{
                            "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}, //children of the Box grid
                        }}
                    >
                        {isRegister && (
                            <>
                                <TextField
                                    label="first Name"
                                    onblur={ handleBlur }
                                    onChange= { handleChange }
                                    value= { values.firstName }
                                    name= "firstName"
                                    error= {Boolean(touched.firstname) && Boolean(errors.firstName)}
                                    helperText= { touched.firstName && errors.firstName }
                                    sx={{ gridColumn: "span 2"}}
                                />

                                <TextField
                                    label="Last Name"
                                    onblur={ handleBlur }
                                    onChange= { handleChange }
                                    value= { values.lastName }
                                    name= "lastName"
                                    error= {Boolean(touched.lastName) && Boolean(errors.lastName)}
                                    helperText= { touched.lastName && errors.lastName }
                                    sx={{ gridColumn: "span 2"}}
                                />

                                <TextField
                                    label="Location"
                                    onblur={ handleBlur }
                                    onChange= { handleChange }
                                    value= { values.location}
                                    name= "location"
                                    error= {Boolean(touched.location) && Boolean(errors.location)}
                                    helperText= { touched.location&& errors.location }
                                    sx={{ gridColumn: "span 4"}}
                                />

                                <TextField
                                    label="Occupation"
                                    onblur={ handleBlur }
                                    onChange= { handleChange }
                                    value= { values.occupation}
                                    name= "occupation"
                                    error= {Boolean(touched.occupation) && Boolean(errors.occupation)}
                                    helperText= { touched.occupation&& errors.occupation }
                                    sx={{ gridColumn: "span 4"}}
                                />

                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius= "5px"
                                    p="1rem"
                                >   
                                    <Dropzone
                                        acceptedFiles=*.jpeg,.jpeg,.png;
                                        multiple={false}
                                        ondrop={(acceptedFiles) => 
                                            setFieldValue("pictures", acceptedFiles[0])
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={""}
                                            >
                                            
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
                            </>
                        )}
                    </Box>
                </form>
            )}
        </Formik>
    )
}