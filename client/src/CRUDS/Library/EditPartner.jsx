import React, { useEffect, useState } from 'react';
import Input from '@mui/material/Input';
import './editpartner.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import { useNavigate, useParams } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
import { Alert, Button,TextField } from '@mui/material';


export default function EditPartner() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [partnerData, setPartnerData] = useState({
    username: '',
    name: '',
    ceo: '',
    city: '',
    state: '',
    street: '',
    zipcode: '',
    password: '',
    image: '',
  });
  const [publishError, setPublishError] = useState(null);
  const { partnerId } = useParams();
  console.log(partnerId);

  const navigate = useNavigate();
  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  
  useEffect(() => {
    // Fetch partner data by ID and populate the state
    axios.get(`http://localhost:5000/partner/allpartners/${partnerId}`)
      .then(response => setPartnerData(response.data.data))
      .catch(error => console.error('Error fetching partner data:', error));
  }, [partnerId]);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image!');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed!');
          setImageUploadProgress(null);
        },
        async () => {
          try {
            // Get download URL after successful upload
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageUploadProgress(null);
            setImageUploadError(null);
            setPartnerData({ ...partnerData, image: downloadURL });
          } catch (urlError) {
            console.error('Error getting download URL:', urlError);
            setImageUploadError('Image upload failed!');
            setImageUploadProgress(null);
          }
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed!');
      setImageUploadProgress(null);
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setPartnerData({
      ...partnerData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleUpdatePartner = () => {
    
    axios.put(`http://localhost:5000/partner/updatepartner/${partnerId}`, partnerData)
      .then(response => {
        console.log('Partner updated successfully:', response.data);
        notify('Partner updated successfully');
        navigate('/admin-partners');
      })
      .catch(error => {
        console.error('Error updating partner:', error);
      });
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="home">
        <div className="components comp">
          <h1>Update PARTNER</h1>
          <div className="create-book-form">
            <div className="div1 inputs1">
            <form>
                <TextField
                  label="Username"
                  name="username"
                  value={partnerData.username || ''}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Name"
                  name="name"
                  value={partnerData.name}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="CEO"
                  name="ceo"
                  value={partnerData.ceo}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="City"
                  name="city"
                  value={partnerData.city}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="State"
                  name="state"
                  value={partnerData.state}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Street"
                  name="street"
                  value={partnerData.street}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Zipcode"
                  name="zipcode"
                  value={partnerData.zipcode}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <div className="form-group fileInput">
                  <Input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <br /> <br />
                  <label htmlFor="image">
                    <Button
                      variant="contained"
                      component="span"
                      onClick={handleUploadImage}
                      disabled={imageUploadProgress ? true : false}
                      className="upload-btn"
                    >
                      {imageUploadProgress ? (
                        <div className="upload">
                          <CircularProgressbar
                            value={imageUploadProgress}
                            text={`${imageUploadProgress || 0}%`}
                          />
                        </div>
                      ) : (
                        'Upload Image'
                      )}
                    </Button>
                  </label>
                </div>

                <div className="button-div">
                    <Button
                    type="button"
                    variant="contained"
                    color="error"
                    className="book-button"
                    onClick={handleUpdatePartner}
                    >
                    Update Partner
                    </Button>
                    <br />
                    {publishError && <Alert color="error">{publishError}</Alert>}
                </div>
              </form>
            </div>
            <br />

            <div className="div2">
              {imageUploadError && (
                <Alert severity="error" className="erro">
                  {imageUploadError}
                </Alert>
              )}
              {partnerData.image && (
                <img
                  src={partnerData.image}
                  alt="upload"
                  className="book-picture1"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}