import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData(); // Call fetchData when component mounts
    }, []);

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/project/api/user');
                setUsers(response.data);
               
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };


    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost/project/api/user/${id}/delete`);
            console.log(response.data);
            // After successful deletion, refetch the data to update the user list
            fetchData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell colSpan={2} sx={{justifyContent:'center', display:'flex'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, key) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.mobile}</TableCell>
                            <TableCell>
                                <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }}><EditIcon/></Link>
                            </TableCell>
                            <TableCell><DeleteIcon color='primary' onClick={() => deleteUser(user.id)} /></TableCell>
                        </TableRow>
                     ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListUser;
