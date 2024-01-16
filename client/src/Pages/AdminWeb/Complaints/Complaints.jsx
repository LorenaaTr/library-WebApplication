import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './complaint.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField  } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';

const rowsPerPageOptions = [5, 10, 25];

const Complaints = () => {

    const [complaints, setComplaints] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
 

  useEffect(() => {
    // Fetch complaints data
    axios.get('http://localhost:5000/complaint/getcomplaints')
      .then(response => setComplaints(response.data.data))
      .catch(error => console.error('Error fetching complaints:', error));
  }, []);

    const handleEdit = (complaintId) => {
    // Implement edit functionality
    console.log(`Edit complaint with ID: ${complaintId}`);
    };

  const handleDelete = (complaintId) => {
    // Implement delete functionality
    console.log(`Delete complaint with ID: ${complaintId}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.user && complaint.user.name && complaint.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='orderspage'>
        <div className='acccontainer'>
        <TextField
        className='searcher'
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{marginTop:100, marginLeft:-130}}
        value={searchQuery}
        onChange={handleSearchChange}
      />
        <TableContainer component={Paper} id='tablecontainer'>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {complaints.map((complaint) => (
                    <TableRow key={complaint._id}>
                    <TableCell> {complaint.user && complaint.user.name ? complaint.user.name : 'N/A'}</TableCell>
                    <TableCell>{complaint.title}</TableCell>
                    <TableCell>{complaint.message}</TableCell>
                    <TableCell>
                        <IconButton onClick={() => handleEdit(complaint._id)}>
                        <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(complaint._id)}>
                        <DeleteIcon />
                        </IconButton>
                        <IconButton>
                            <Link to={`/singlecomplaint/${complaint._id}`}>
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

export default Complaints