import React from 'react';
import { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import SimpleDialogDemo from './components/layout';
import { createUser } from './components/services';
import SignInSide from './components/signIn';
import { useCookies } from "react-cookie";
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login';
import SignUp from './components/Register';
import GoogleCalendar from './components/GoogleCalendar';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DashboardContent from './components/MainPage';
import CalendarHR from './calendar/Calendar';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

function App() {

  

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    

    <div className="App">      
    {/* <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> </ThemeProvider> */}
        <BrowserRouter>
          {/* <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>  */}
            {/* <MyApp /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/main' component={DashboardContent} />
            <Route exact path='/register' component={SignUp} />
            <Route exact path='/calendar' component={CalendarHR} />
            {/* </ThemeProvider>
          </ColorModeContext.Provider> */}
        </BrowserRouter>
      {/* </ThemeProvider>
    </ColorModeContext.Provider> */}
     
    </div>
    
    
  );
}

export default App;
