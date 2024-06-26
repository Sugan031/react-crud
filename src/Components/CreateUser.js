import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Home from './Home';

const CreateUser = () => {
    const [inputs, setInputs] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit =  async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', inputs);
            console.log(response.data);
            if(response){
                setInputs([]);
                alert("Values are added");
                navigate('user');
            }
            setInputs({ name: '', email: '', mobile: '' }); 
        } catch (error) {
            console.error('Error while submitting form:', error);
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
        <Home/>
        <Box display='flex' justifyContent='center' marginTop='100px'>
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
            <Typography variant='h4'sx={{fontFamily:'sans-serif', fontStyle:'oblique'}}>Add User</Typography>
            {/* <br></br> */}
             <TextField id="outlined-name" label="Name" variant="outlined" name='name' onChange={handleChange}/>
             <br></br>
             <TextField id="outlined-email" label="Email" variant="outlined" name='email' onChange={handleChange} />
             <br></br>
             <TextField id="outlined-mobile" label="Mobile No." variant="outlined" name='mobile' onChange={handleChange} />
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

export default CreateUser