import React from 'react';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './createbook.css';
import { Button } from '@mui/material';
import { getStorage } from 'firebase/storage';


export default function CreateBook() {
  const[ file, setFile ] = useState(null);
  
  const handleUploadImage = async () => {
    try {
      if(!file){
        return;
      }
      const storage = getStorage(app);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <SystemHeader />
      <SystemSidebar />
      <div className="home">
        <div className="components comp">
          <h1>Create BOOK</h1>
          <div className="create-book-form">
            <form>
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
              <div className="form-group">
                <Input
                  type="file"
                  id="image"
                  inputProps={{ accept: 'image/*' }}
                  style={{ display: 'none' }}
                  onChange={(e) => setFile(e.target.files[0]) }
                />
                <label htmlFor="image">
                  <Button variant="contained" component="span" onClick={handleUploadImage}>
                    Upload Image
                  </Button>
                </label>
              </div>


              <Button type='submit'
                    variant="contained"
                    color="error"
                    className="book-button">Create Book
            </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
