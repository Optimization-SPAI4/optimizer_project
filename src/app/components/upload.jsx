"use client"

import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [predictionResult, setPredictionResult] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://192.168.180.204:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      setApiResponse(response.data);
      setPredictionResult(response.response); // Assuming the prediction result is in response.data.prediction
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {apiResponse && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
      {predictionResult && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;