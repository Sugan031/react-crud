import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <Box>
      <Typography variant="h5" component='h1' sx={{fontFamily:'sans-serif'}}>
        React CRUD operations using PHP API and MySQL
      </Typography>
      <BrowserRouter>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List User" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="user/create" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create User" />
            </ListItemButton>
            </Link>
          </ListItem>
          </List>
        </nav>
        <Routes>
          <Route index element={<ListUser/>}></Route>
          <Route path="user/create" element={<CreateUser/>}></Route>
          <Route path="user/:id/edit" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
