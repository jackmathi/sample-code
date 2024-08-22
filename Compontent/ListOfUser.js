import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MyComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Clear previous errors
  
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array ensures fetching data only once
  
    // ... rest of your component
    return (
        <div>
          {loading && <p>Loading data...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <div>
              {data.map((item) => (
                <div key={item.id}>{item.name}
                <p>{item.email}</p>
                <p>{item.address.city}</p>
                
                </div>
              ))}
            </div>
          )}
        </div>
      );
   
  }
  
  export default MyComponent;