import React, { useState } from 'react';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './createbook.css';
import { Alert, Button } from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';

export default function CreateBook() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
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
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed!');
      setImageUploadProgress(null);
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('api/book/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        //navigate(`/book/${data}`)
      }
    } catch (error) {
      setPublishError('Something went wrong!');
      console.error(error);
    }
  };

  return (
    <>
      <SystemHeader />
      <SystemSidebar />
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
                />
              </div>

              <div className="form-group">
                <TextField
                  id="author"
                  label="Author"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="form-group">
                <TextField
                  id="description"
                  label="Description"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="form-group">
                <TextField
                  id="category"
                  label="Category"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="form-group">
                <TextField
                  id="isbn"
                  label="ISBN"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="form-group">
                <TextField
                  id="price"
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
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
                      disabled={imageUploadProgress}
                      className="upload-btn"
                    >
                      {imageUploadProgress ? (
                        <div className="upload">
                          <CircularProgress
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
                  {publishError && <Alert color="failure">{publishError}</Alert>}
                </div>
              </form>
            </div>

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
