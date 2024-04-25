import React, { useState,useRef } from 'react';
import axios from 'axios';

export default function AddSong() {
  const [formData, setFormData] = useState({
    name: '',
    singer: '',
    date: '',
    imagefile: null,
    audiofile: null
  });
 
  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('singer', formData.singer);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('imagefile', formData.imagefile); // Append the file object
      formDataToSend.append('audiofile', formData.audiofile); // Append the file object

      const response = await axios.post(`http://localhost:2032/createsong`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for FormData
        }  
      });

      if (response.status === 200) {
        setFormData({
          name: '',
          singer: '',
          date: '',
          imagefile: null,
          audiofile: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div>
      <h3 align="center"><u>Add Song</u></h3>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
        <div>
          <label>Song Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Singer</label>
          <input type="text" id="singer" value={formData.singer} onChange={handleChange} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Song Poster</label>
          <input type="file" id="imagefile" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <div>
          <label>Audio File</label>
          <input type="file" id="audiofile" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}