import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const UpdateUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/project/api/user/${id}`);
                // console.log(response.data);
                setInputs(response.data);
               
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, [id]);
    
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit =  async(event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost/project/api/user/${id}/edit`, inputs);
            console.log(response);
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
         <Typography variant='h4'sx={{fontFamily:'sans-serif', fontStyle:'oblique'}}>Update User</Typography>
        <Box
                component="form"
                 sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
        >
             <TextField id="outlined-name" value={inputs.name}  label="Name" variant="outlined" name='name' InputLabelProps={{ shrink: inputs.name ? true : false }} onChange={handleChange}/>
             <TextField id="outlined-email" value={inputs.email} label="Email" variant="outlined" name='email' InputLabelProps={{ shrink: inputs.email ? true : false }} onChange={handleChange} />
             <TextField id="outlined-mobile" value={inputs.mobile} label="Mobile No." variant="outlined" name='mobile' InputLabelProps={{ shrink: inputs.mobile ? true : false }} onChange={handleChange} />
             <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Box>
    </div>
  )
}

export default UpdateUser