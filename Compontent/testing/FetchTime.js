import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function FetchTime() {
    const timeLimit = 5000; // 5 seconds
    const [data, setDatas] = useState([]);
    useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios('https://jsonplaceholder.typicode.com/posts');
      setDatas(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const intervalId = setInterval(() => {
    fetchData();
  }, timeLimit);

  // Clean up the interval on component unmount
  return () => clearInterval(intervalId);
}, []);
  return (
    <div>
        {data.map((item) => (
 <div key={item.id}>
    <p>{item.id}</p>
    <p>{item.title}</p>
    <p>{item.body}</p>
            
 </div>
        ))}
       
    </div>
  )
}
