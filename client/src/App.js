import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage  from './scenes/homePage/index.jsx'; 
import LoginPage from './scenes/loginPage/index.jsx';
import ProfilePage from './scenes/profilePage/index.jsx';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  //Grabbing mode from our state 
  const mode = useSelector((state) => state.mode) //value from initial state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //handle the state of changing apperances


  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes> 
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App;
