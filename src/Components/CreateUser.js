import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [inputs, setInputs] = useState([]);
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
            const response = await axios.post('http://localhost/project/api/user/save', inputs);
            console.log(response.data);
            if(response){
                setInputs([]);
                alert("Values are added");
                navigate('/');
            }
            setInputs({ name: '', email: '', mobile: '' }); 
        } catch (error) {
            console.error('Error while submitting form:', error);
        }
    }

  return (
    <div>
        <Typography variant='h4'sx={{fontFamily:'sans-serif', fontStyle:'oblique'}}>Create User</Typography>
        <Box
                component="form"
                 sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
        >
             <TextField id="outlined-name" label="Name" variant="outlined" name='name' onChange={handleChange}/>
             <TextField id="outlined-email" label="Email" variant="outlined" name='email' onChange={handleChange} />
             <TextField id="outlined-mobile" label="Mobile No." variant="outlined" name='mobile' onChange={handleChange} />
             <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Box>
       
    </div>
  )
}

export default CreateUser