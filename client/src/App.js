import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage  from 'scenes/homePage'; 
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  //Grabbing mode from our state 
  const mode = useSelector((state) => state.mode) //value from initial state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //handle the state of changing apperances
  const isAuth = Boolean(useSelector((state) => state.token)) //truthy or falsey 

  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route 
              path="/home" 
              element={isAuth ? <HomePage /> : <Navigate to="/" />} 
            />
            <Route 
              path="/profile/:userId" 
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />} 
            />
          </Routes> 
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App;
