import React, { useEffect, useState } from 'react';
import PartnerWebHeader from '../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../Components/PartnerSidebar/PartnerSidebar';
import Input from '@mui/material/Input';
import './createbook.css';
import { Alert, Button, InputLabel, OutlinedInput, TextareaAutosize } from '@mui/material';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import { useNavigate, useParams } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function EditBook() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { bookId } = useParams();

  const navigate = useNavigate();

  
  useEffect(() => {
    try {
      const fetchBook = async () =>{
      const res = await fetch(`http://localhost:5000/book/getbooks?bookId=${bookId}`);
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
        setPublishError(data.message);
        return;
      }
      if(res.ok){
        setPublishError(null);
        setFormData(data.books[0]);
      }
      };
      fetchBook();
    } catch (error) {
      console.log(error.message);
    }
  }, [bookId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/book/updatebook/${formData._id}`, {
        method: 'PUT',
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
        navigate('/partner-dashboard')
      }
    } catch (error) {
      setPublishError('Something went wrong!');
    }
  };

  const handleDescriptionChange = (e) => {
    // Update the state when the value changes
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <>
      <PartnerWebHeader />
      <PartnerSidebar />
      <div className="home">
        <div className="components comp">
          <h1>Update BOOK</h1>
          <div className="create-book-form">
            <div className="div1">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
              <InputLabel htmlFor="title" >Book Title</InputLabel>
                <OutlinedInput
                  id="title"
                  name="title"
                  style={{ width: '100%' }}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  value={formData.title}
                />
              </div>

              <div className="form-group">
              <InputLabel htmlFor="libraryName">Library Name</InputLabel>
                <OutlinedInput
                  id="libraryName"
                  name="libraryName"
                  style={{ width: '100%' }}
                  onChange={(e) =>
                    setFormData({ ...formData, libraryName: e.target.value })
                  }
                  value={formData.libraryName}
                />
              </div>

              <div className="form-group">
              <InputLabel htmlFor="author"> Author</InputLabel>
                <OutlinedInput
                  id="author"
                  label="Author"
                  style={{ width: '100%' }}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  value={formData.author}
                />
              </div>

              <div className="form-group">
              <label htmlFor="description">Description</label>
              <br />
                <TextareaAutosize
                  id="description"
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Enter book description"
                  onChange={(e) => handleDescriptionChange(e)}
                  value={formData.description}
                  style={{ width: '100%' }} // Set the width to 100% to fill the container
                />
              </div>

              <div className="form-group">
              <InputLabel htmlFor="category">Category</InputLabel>
                <OutlinedInput
                  id="category"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  value={formData.category}
                  style={{ width: '100%' }}
                />
              </div>

              <div className="form-group">
              <InputLabel htmlFor="isbn">ISBN</InputLabel>
                <OutlinedInput
                  id="isbn"
                  style={{ width: '100%' }}
                  onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                  value={formData.isbn}
                />
              </div>

              <div className="form-group">
              <InputLabel htmlFor="price">Price</InputLabel>
                <OutlinedInput
                  id="price"
                  style={{ width: '100%' }}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
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
                    Update Book
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