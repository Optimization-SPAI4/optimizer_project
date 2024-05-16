"use client"

import React, { useState } from 'react';
import axios from 'axios';

let predict = 0
const YourComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predict, setPredict] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://192.168.2.69:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPredict(response.data.result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h1>{predict}</h1>
    </div>
  );
};

export default YourComponent;