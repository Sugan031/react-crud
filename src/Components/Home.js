import React from 'react'
import { AppBar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';
import styled from "@emotion/styled";
import ListUser from './ListUser';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
const Home = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent : 'space-between',
    backgroundColor:'white'
})
  return (
    
   
    <AppBar position='sticky'>
    <StyledToolbar >
   <Typography variant="h5" component='h1' sx={{fontFamily:'sans-serif', color:'blue'}}>
     React CRUD operations using PHP API and MySQL
   </Typography>

   <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
       <Link to="/user" style={{ textDecoration: 'none', color: 'blue' }}>
         <ListItemButton>
           <ListItemIcon>
             <ListIcon />
           </ListItemIcon>
           <ListItemText primary="List User" />
         </ListItemButton>
         </Link>
       
       <Link to="/user/create" style={{ textDecoration: 'none', color: 'blue' }}>
         <ListItemButton>
           <ListItemIcon>
             <CreateIcon />
           </ListItemIcon>
           <ListItemText primary="Add User" />
         </ListItemButton>
         </Link>
    </Box>
    </StyledToolbar>
   </AppBar>
   
  )
}

export default Home