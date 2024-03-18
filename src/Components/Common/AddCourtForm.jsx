// AddCourtForm.js
import React, { useState } from 'react';
import AxiosInstance from '../../config/AxiosInstance';
import './AddCourtForm.css'; // Import your CSS file
import MainNavBar from './MainNavBar'; // Import your main navbar component
import 'react-toastify/dist/ReactToastify.css';
// Correct import if ToastContainr.js has a default export

import { toastError, toastSuccess } from '../../Constants/Pluggins';
import { useNavigate } from 'react-router-dom';

const AddCourtForm = () => {
  const [formValue, setFormValue] = useState({
    courtName: '',
    sportType: '',
    location: '',
    description: '',
    address: '',
    courtImage: null,
  });
const navigate=useNavigate()
  const [selectedImage, setSelectedImage] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputValue = type === 'file' ? files[0] : value;

    setFormValue({
      ...formValue,
      [name]: inputValue,
    });

    if (type === 'file' && inputValue) {
      try {
        const imageUrl = URL.createObjectURL(inputValue);
        setSelectedImage(imageUrl);
      } catch (error) {
        console.error('Error creating object URL:', error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formValue.courtName.trim()) {
      newErrors.courtName = 'Court name is required';
      isValid = false;
    }

    if (!formValue.sportType.trim()) {
      newErrors.sportType = 'Sport type is required';
      isValid = false;
    }

    if (!formValue.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    if (!formValue.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    if (!formValue.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!formValue.courtImage) {
      newErrors.courtImage = 'Court image is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formValue);
      await addCourtData();
      console.log('Form submitted successfully!');
    }
  };

  const addCourtData = async () => {
    try {
      let formData = new FormData();
      formData.append('courtName', formValue.courtName);
      formData.append('sportType', formValue.sportType);
      formData.append('location', formValue.location);
      formData.append('description', formValue.description);
    
      formData.append('address', formValue.address);

      formData.append('courtImage', formValue.courtImage);

      const response = await AxiosInstance.post('/admin/addCourtData', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      toastSuccess('new court added')
      console.log('Response:', response.data);
      navigate('/home')
    } catch (error) {
      console.error('Error:', error);
      toastError('sorry')
    }
  };

  return (
    <div>
      <MainNavBar />
      <div className="add-court-form">
        <h2>Add a Court</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courtName">Court Name</label>
            <input
              type="text"
              id="courtName"
              name="courtName"
              value={formValue.courtName}
              onChange={handleChange}
            />
            {errors.courtName && <p className="error-message">{errors.courtName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="sportType">Sport Type</label>
            <select
              id="sportType"
              name="sportType"
              value={formValue.sportType}
              onChange={handleChange}
            >
              <option value="">Select Sport Type</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
              {/* Add more sports types as needed */}
            </select>
            {errors.sportType && <p className="error-message">{errors.sportType}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formValue.location}
              onChange={handleChange}
            />
            {errors.location && <p className="error-message">{errors.location}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formValue.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error-message">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formValue.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="courtImage">Court Image</label>
            <input
              type="file"
              id="courtImage"
              name="courtImage"
              accept="image/*"
              onChange={handleChange}
            />
            {errors.courtImage && <p className="error-message">{errors.courtImage}</p>}
          </div>

          {selectedImage && (
            <>
              <div className="image-preview Container">
                <img src={selectedImage} alt="Court Preview" width={'800px'} />
              </div>
            </>
          )}

          <button type="submit">Add Court Data</button>
        </form>
      </div>
      

    </div>
  );
};

export default AddCourtForm;