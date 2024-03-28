import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Home from './Home';


const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password :''
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    // const [submitted, setSubmitted] = useState(false);
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }

    const ValidateForm = () =>{
        let isValid = true;
        const newErrors = {};

        if(!inputs.email){
            newErrors.email = "email is required";
            isValid = false;
        }

        if(!inputs.password){
            newErrors.password = "password is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;

    }
    const handleSubmit =  async(event) => {
        event.preventDefault();
        const newErrors = {};
        let isValid = true;
    if(ValidateForm){
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', inputs);
            const values = response.data;
            if(values.status ===1){
                setInputs([]);
                alert("login successfull");
                navigate('user');
            }
            setInputs({ name: '', email: '', mobile: '' }); 
            } catch (error) {
            console.error('Error while submitting form:', error);
            }
        }
        else{
            if(!inputs.email){
                newErrors.email = "email is required";
                isValid = false;
            }
    
            if(!inputs.password){
                newErrors.password = "password is required";
                isValid = false;
            }
    
            setErrors(newErrors);
        }
    }
    const handleShowPassword = (event)=>{
        event.preventDefault();
        if(showPassword){
            setShowPassword(false);
        }
        else{
            setShowPassword(true);
        }
    }
  return (
    <div>
         <Box display='flex' justifyContent='center' marginTop='200px'>
        {/* <Typography variant='h4'sx={{fontFamily:'sans-serif', fontStyle:'oblique'}}>Create User</Typography> */}
        <Box
                component="form"
                 sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                       border:'1px solid black',
                       borderRadius:'10px',
                       boxShadow:'5px 5px hsla(0,0%,0%,0.1)',
                       padding:'20px',
                       margin:'10px',
                       display:'inline-block',
                       alignItems:'end',
                       maxWidth:'300px'
                }}
                noValidate
                autoComplete="off"
        >
            <Typography variant='h4'sx={{fontFamily:'sans-serif', fontStyle:'oblique'}}>Login</Typography>
            {/* <br></br> */}
             <TextField id="outlined-email" label="Email" variant="outlined" name='email' onChange={handleChange} />
             {errors.email && <p className="error">{errors.email}a</p>}
             <br></br>
             <TextField id="outlined-password" label="Password" variant="outlined" name='password' type={showPassword?'text':'password'} InputProps={{
                endAdornment: <IconButton 
                onClick={handleShowPassword}>
                    {showPassword?<VisibilityOffIcon/>:<VisibilityIcon/>}
                </IconButton>
             }} onChange={handleChange}/>
             <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Box>
        </Box>
    </div>
  )
}

export default Login