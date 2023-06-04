import * as React from 'react';
import { useEffect,useMemo, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../services/api';
import { Radio, RadioGroup } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {

// --------------------------//Auth code---------------------

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [gender, setGender] = useState('')
const [phno, setNumber] = useState('')
const[password,setPassword] = useState('')
const[c_password,setCpassword] = useState('')
    const [iq ,setIq] = useState(true)

    const navigate = useNavigate();


const [responseInfo , response] = useSignUpMutation()


  const handleSignUp = (async (e) => {
  
    e.preventDefault();
    console.log(name, email, gender, phno, password, c_password)
  const body = JSON.stringify({ name, email, gender, phno, password, c_password })
  if(name&&email&&gender&&phno&&password&&c_password){
    await responseInfo(body)
  } else {
    alert('Please Fill up The Form')
  }
   
  })

  console.log(response.isSuccess, 'Response from Api ');
  useEffect(() => {
    if (response.isSuccess === true) {
      navigate('/')
    }
  },[response.isSuccess])

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
          
              <TextField margin="normal" required fullWidth name="name" label="name"type="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
              <TextField margin="normal" required fullWidth  name="email" label="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                           <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>     
                            <FormControlLabel value='female'checked={gender == 'female'} control={<Radio />} onChange={(e) => setGender(e.target.value)} label="Female" />
                            <FormControlLabel value='male'  checked={gender == 'male'} control={<Radio />} onChange={(e) => setGender(e.target.value)} label="Male" />
                            <FormControlLabel value='other' checked={gender == 'other'} control={<Radio />} onChange={(e) => setGender(e.target.value)} label="other" />
                          </RadioGroup>

                 <TextField margin="normal" required fullWidth name="number" label="phone Number" type="number" id="number"value={phno} onChange={(e) => setNumber(e.target.value)} />
                 <TextField margin="normal" required fullWidth name="password" label="password" type="password" id="password"value={password} onChange={(e) => setPassword(e.target.value)} />
                 <TextField margin="normal" required fullWidth name="confirm password" label="confirm password" type="password" id="c_password"value={c_password} onChange={(e) => setCpassword(e.target.value)} />
                          
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
              onClick={handleSignUp}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}