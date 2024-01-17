import React, { useState } from 'react';
import AdminWebHeader from '../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './addpartner.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { app } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';


export default function CreatePartner() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    ceo: '',
    city: '',
    state: '',
    street: '',
    zipcode: '',
    password: '',
    role: '',
  });
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

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
            setFormData({ ...formData, image: downloadURL });
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

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return {};
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = decodeToken(token);
      const requestData = {
        user: {
          _id: decodedToken.userId,
          name: decodedToken.username,
        },
        title: formData.title,
        author: formData.author,
        description: formData.description,
        isbn: formData.isbn,
        image: formData.image,
        price: formData.price,
        category: formData.category,
      };

      axios.post("http://localhost:5000/", requestData)
        .then((res) => {
          console.log('res', res);
          notify("Book created successfully!");
          setFormData({
            title: "",
            author: "",
            description: "",
            isbn: "",
            category: "",
            price: "",
            image: ""
          });
          navigate("/partner-dashboard")
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('Token not available');
    }
  };

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <AdminWebHeader />
      <AdminSidebar />
      <div className="home">
        <div className="components comp">
          <h1>Add PARTNER</h1>
          <div className="create-partner-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="ceo"
                  name="ceo"
                  label="CEO"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, ceo: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="state"
                  name="state"
                  label="State"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="street"
                  name="street"
                  label="Street"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="zipcode"
                  name="zipcode"
                  label="Zipcode"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, zipcode: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div className="form-group fileInput">
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
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
                  type="submit"
                  variant="contained"
                  color="error"
                  className="partner-button"
                >
                  Create Partner
                </Button>
                <br />
                {publishError && <Alert color="error">{publishError}</Alert>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
