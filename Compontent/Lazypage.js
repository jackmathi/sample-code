import React, { useState, useEffect, useRef } from 'react';

function MyPage() {
  const [data, setData] = useState([]);
  const [currentPost, setCurrentPost] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?post=${currentPost}`);
    const newData = await response.json();
    setData([...data, ...newData]);
    setTotalPosts(newData.totalPosts);
  };

  const handlePageChange = (post) => {
    setCurrentPost(post);
    fetchData();
  };

  const handleScroll = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentPost < totalPosts) {
        fetchData();
      }
    });

    observerRef.current.observe(document.querySelector('.content-container'));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content-container">
      {data.map((item) => (
        <div key={item.id}>
         <p>
                {item.id}
            </p>
            <p>
                {item.title}
            </p>
            <p>
                {item.body}
            </p>
            </div>
      ))}
      <ul>test
        {Array.from({ length: totalPosts }, (_, index) => index + 1).map((post) => (
          <li key={post} onClick={() => handlePageChange(post)}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage;