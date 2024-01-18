import React, { useState } from 'react';
import PartnerWebHeader from '../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../Components/PartnerSidebar/PartnerSidebar';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

import { Alert, Button } from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import { useNavigate } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBook() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    isbn: "",
    category: "",
    price: "",
    image: ""
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

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
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

      axios.post("http://localhost:5000/book/createbook", requestData)
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

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setFormData({ ...formData, author: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };
  const handleIsbnChange = (e) => {
    setFormData({ ...formData, isbn: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  return (
    <>
      <PartnerWebHeader />
      <PartnerSidebar />
      <div className="home">
        <div className="components comp">
          <h1>Create BOOK</h1>
          <div className="create-book-form">
            <div className="div1">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <TextField
                    id="title"
                    name="title"
                    label="Book Title"
                    variant="outlined"
                    fullWidth
                    onChange={handleTitleChange}
                    value={formData.title}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    id="author"
                    label="Author"
                    variant="outlined"
                    fullWidth
                    onChange={handleAuthorChange}
                    value={formData.author}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    onChange={handleDescriptionChange}
                    value={formData.description}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    id="category"
                    label="Category"
                    variant="outlined"
                    fullWidth
                    onChange={handleCategoryChange}
                    value={formData.category}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    id="isbn"
                    label="ISBN"
                    variant="outlined"
                    fullWidth
                    onChange={handleIsbnChange}
                    value={formData.isbn}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    id="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={handlePriceChange}
                    value={formData.price}
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
                    className="book-button"
                  >
                    Create Book
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
              {formData.image && (
                <img
                  src={formData.image}
                  alt="upload"
                  className="book-picture"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
