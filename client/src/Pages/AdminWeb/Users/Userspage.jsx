import React from 'react'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField  } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './userspage.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Userspage = () => {

    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/user/getusers')
          .then(response => setUsers(response.data.data))
          .catch(error => console.error('Error fetching complaints:', error));
      }, []);
    
      const notify = (message) => {
        toast.success(message, {
          autoClose: 2000, 
          position: toast.POSITION.TOP_CENTER,
        });
    };

    const handleDelete = async (userId) => {
        try {
          await axios.delete(`http://localhost:5000/user/deleteuser/${userId}`);
          notify('Complaint deleted successfully');
          axios.get('http://localhost:5000/user/getusers')
            .then(response => setUsers(response.data.data))
            .catch(error => console.error('Error fetching complaints:', error));
        } catch (error) {
          console.error('Error deleting complaint:', error);
        }
    };

    const filteredUsers = users.filter((user) =>
        user.username && user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.surname && user.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.city && user.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.birthday && user.birthday.toLowerCase().includes(searchQuery.toLowerCase())
    );
      
    
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='userspage'>
        <div className='userscontainer'>
        <TextField
        className='searcher'
        label="Search by user"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{marginTop:100, marginLeft:-130}}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button
            id='buttonadd'
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/adduser" 
            style={{ marginTop: 20, marginLeft: -130 }}
          ></Button>
        <TableContainer component={Paper} id='tablecontainer'>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {filteredUsers.map((user) => (
                    <TableRow key={user._id}>
                    <TableCell> {user.username}</TableCell>
                    <TableCell> {user.password}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.surname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.city}</TableCell>
                    <TableCell>{user.birthday}</TableCell>
                    <TableCell>
                        <IconButton >
                        <Link to={`/updateuser/${user._id}`}>
                            <EditIcon />
                        </Link>
                        </IconButton>
                        <IconButton >
                        <DeleteIcon onClick={() => handleDelete(user._id)}/>
                        </IconButton>
                        <IconButton>
                            <Link to={`/singleuser/${user._id}`}>
                        <ArrowForwardIcon />
                        </Link>
                        </IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    </div>
    </>
  )
}

export default Userspage