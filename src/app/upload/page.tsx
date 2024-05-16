"use client"
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../components/css/ArrowIndicator.module.css';
import Navbar from '../components/Navbar';


const Upload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [predict, setPredict] = useState<number | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append('file', selectedFile);
      }
      const response = await axios.post('http://127.0.0.1:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPredict(response.data.predict);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className='hero min-h-screen-[90vh] bg-base-20'>
      <div className='hero-content text-center'>
        <div className="max-w-md">
          <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className='btn btn-outline btn-primary'>Upload</button>
            <h1>{predict !== null ? predict : ''}</h1>
          </div>
          <div className={styles.container}>
            <div className={`${styles.arrow} ${predict == 120 ? styles.glow : ''}`}>←</div>
            <div className={`${styles.circle} ${predict == 150 ? styles.glow : ''}`}>○</div>
            <div className={`${styles.arrow} ${predict == 110 ? styles.glow : ''}`}>→</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Upload;