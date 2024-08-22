import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostOrUserDetails = () => {
  const [selectedOption, setSelectedOption] = useState('post');
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedOption === 'post') {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
          setPosts(response.data);
        } else if (selectedOption === 'user') {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
          setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption]);

  return (
    <div>
      <h2>Select Option</h2>
      <label>
        <input
          type="radio"
          value="post"
          checked={selectedOption === 'post'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Post
      </label>
      <label>
        <input
          type="radio"
          value="user"
          checked={selectedOption === 'user'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        User Details
      </label>

      {selectedOption === 'post' && (
        <div>
          <h2>Posts</h2>
         <div>
            {posts.map((post) => (
              <p key={post.id}>{post.id} &nbsp; {post.title}</p>
            ))}
          </div>
        </div>
      )}

      {selectedOption === 'user' && userDetails && (
        <div>
          <h2>User Details</h2>
          <ul>
            {userDetails.map((user) => (
              <li key={user.id}>
                Name: {user.name}
                <br />
                Email: {user.email}
                <br />
                City: {user.address.city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostOrUserDetails;