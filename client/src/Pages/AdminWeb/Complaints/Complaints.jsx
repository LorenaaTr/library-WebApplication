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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Complaints = () => {

  const [complaints, setComplaints] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 

  useEffect(() => {
    axios.get('http://localhost:5000/complaint/getcomplaints')
      .then(response => setComplaints(response.data.data))
      .catch(error => console.error('Error fetching complaints:', error));
  }, []);

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000, 
      position: toast.POSITION.TOP_CENTER,
    });
  };
  

  const handleDelete = async (complaintId) => {
    try {
      await axios.delete(`http://localhost:5000/complaint/deletecomplaint/${complaintId}`);
      notify('Complaint deleted successfully');
      axios.get('http://localhost:5000/complaint/getcomplaints')
        .then(response => setComplaints(response.data.data))
        .catch(error => console.error('Error fetching complaints:', error));
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.user && complaint.user.name && complaint.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    complaint.title && complaint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    complaint.message && complaint.message.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='complaintspage'>
        <div className='complaintcontainer'>
        <TextField
        className='searcher'
        label="Search by user, title and message"
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
                {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint._id}>
                    <TableCell> {complaint.user && complaint.user.name ? complaint.user.name : 'N/A'}</TableCell>
                    <TableCell>{complaint.title}</TableCell>
                    <TableCell>{complaint.message}</TableCell>
                    <TableCell>
                        <IconButton >
                          <Link to={`/updatecomplaint/${complaint._id}`}>
                            <EditIcon />
                          </Link>
                        </IconButton>
                        <IconButton >
                        <DeleteIcon onClick={() => handleDelete(complaint._id)}/>
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