import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import LoginG from './GoogleLogin';
// import { useCookies } from "react-cookie";
// import {useHistory} from "react-router-dom";
// import { useEffect } from "react";

interface Props{

    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    postUser: () => void;
}

const SignInSide : React.FC<Props> = ({username, setUsername, password, setPassword, postUser}) => {

  // const [token, setToken, removeToken] = useCookies(['tokens'])
  
  // let history = useHistory()

  // useEffect(() => {
  //       if(!token['tokens']) {
  //           history.push('/main')
  //       }
  // }, [token])

  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://qcerris.com/">
          QCerris
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      );
  }

  const theme = createTheme();

  var sectionStyle = {
    width: "100%",
    height: "150px",
    backgroundImage: 'url(http://localhost:3000/static/images/QCERRIS.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };  
   
  return (  
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <section style={ sectionStyle }>
             </section>
          
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={username}
                onChange={
                    (e) => {setUsername(e.target.value)
                }}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={
                    (e) => {setPassword(e.target.value)
                }}
                autoComplete="current-password"
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
                onClick={postUser}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
            </Button>
            <LoginG />
            <br/>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
     
  );
}

 export default SignInSide;