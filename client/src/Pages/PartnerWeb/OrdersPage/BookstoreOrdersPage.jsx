import React, { useState } from 'react';
import PartnerHeader from '../../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../../Components/PartnerSidebar/PartnerSidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './orderspage.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const BookstoreOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  return (
    <>
      <PartnerHeader />
      <PartnerSidebar />
      <div className='orderspage'>
        <div className='acccontainer'>
          <TableContainer component={Paper} id='tablecontainer'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Books</TableCell>
                  <TableCell>Total Amount</TableCell>
                  <TableCell>Order Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Shipping Address</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order.user.username}</TableCell>
                    <TableCell>
                      <ul>
                        {order.books.map((bookItem) => (
                          <li key={bookItem.book._id}>
                            {bookItem.quantity} x {bookItem.book.title}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>{order.totalAmount}</TableCell>
                    <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>
                      {`${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.houseNumber}`}
                    </TableCell>
                    <TableCell>
                      <EditIcon color='primary' style={{ cursor: 'pointer', marginRight: '8px' }} />
                      <DeleteIcon color='secondary' style={{ cursor: 'pointer' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
          style={{maxWidth:200, marginLeft:750, marginBottom:100, backgroundColor:"red"}}
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
        >
          Add Order
        </Button>
        </div>
      </div>
    </>
  );
};

export default BookstoreOrdersPage;
