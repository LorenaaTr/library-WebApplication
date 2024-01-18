import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';

const LibraryDashboard = () => {
  const {user} = useParams();
  const [partners, setPartners] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/partner/allpartners')
    .then(response => {
      console.log('API Response:', response.data);
      setPartners(response.data.data);
    })
    .catch(error => console.error('Error fetching partners:', error));
  }, []);

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/partner/deletepartner/${id}`);
      notify('Partner deleted successfully');
      axios.get('http://localhost:5000/partner/allpartners')
        .then(response => setPartners(response.data.data))
        .catch(error => console.error('Error fetching partners:', error));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPartners =
  partners &&
  partners.filter((partner) =>
    partner.username &&
    partner.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.name &&
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.ceo &&
      partner.ceo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.city &&
      partner.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.state &&
      partner.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.street &&
      partner.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.image &&
      partner.image.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='complaintspage'>
        <div className='complaintcontainer'>
          <TextField
            className='searcher'
            label="Search by username, name, ceo, street, or zipcode"
            variant="outlined"
            fullWidth
            margin="normal"
            style={{ marginTop: 100, marginLeft: -130 }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button
            id='buttonadd'
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/add-partner"
            style={{ marginTop: 20, marginLeft: -130 }}
          ></Button>
          <TableContainer component={Paper} id='tablecontainer'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Street</TableCell>
                  <TableCell>Zipcode</TableCell>
                  <TableCell>Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {filteredPartners && filteredPartners.map((partner) => (
                  <TableRow key={partner._id}>
                    <TableCell>{partner.image && <img src={partner.image} alt={partner.name} style={{ maxWidth: '150px', maxHeight: '150px' }} />}</TableCell>
                    <TableCell> {partner.username}</TableCell>
                    <TableCell>{partner.name}</TableCell>
                    <TableCell>{partner.ceo}</TableCell>
                    <TableCell>{partner.city}</TableCell>
                    <TableCell>{partner.state}</TableCell>
                    <TableCell>{partner.street}</TableCell>
                    <TableCell>{partner.zipcode}</TableCell>
                    <TableCell>{partner.password}</TableCell>
                    <TableCell>
                      <IconButton>
                        <Link to={`/edit-partner/${partner._id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <DeleteIcon onClick={() => handleDelete(partner._id)} />
                      </IconButton>
                      <IconButton>
                        <Link to={`/singlepartner/${partner._id}`}>
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
  );
}

export default LibraryDashboard;
