// pages/api/get-value.js

export default function handler(req, res) {
    // Set the appropriate response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); // If you need to support CORS
    res.setHeader('Cache-Control', 'no-cache'); // Disable caching if needed
  
    // Set the dynamic value or fetch it from a data source
    const value = 120; // Replace this with your dynamic logic if needed
  
    // Send the API response
    res.status(200).json({ value });
  }