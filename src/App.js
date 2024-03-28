import { AppBar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
import styled from "@emotion/styled";

function App() {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent : 'space-between',
    backgroundColor:'white'
})


  return (
    <BrowserRouter>
   
       <AppBar position='sticky'>
       <StyledToolbar >
      <Typography variant="h5" component='h1' sx={{fontFamily:'sans-serif', color:'blue'}}>
        React CRUD operations using PHP API and MySQL
      </Typography>
   
      <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List User" />
            </ListItemButton>
            </Link>
          
          <Link to="user/create" style={{ textDecoration: 'none', color: 'blue' }}>
            <ListItemButton>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create User" />
            </ListItemButton>
            </Link>
       </Box>
       </StyledToolbar>
      </AppBar>
      <Routes>
          <Route index element={<ListUser/>}></Route>
          <Route path="user/create" element={<CreateUser/>}></Route>
          <Route path="user/:id/edit" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
