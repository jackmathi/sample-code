import React, { useState, useEffect, useRef } from 'react';

function PostLazy() {
  const [images, setImages] = useState([]);
  const [post, setPost] = useState(1);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?post=${post}`);
    const newData = await response.json();
    setImages([...images, ...newData]);
    setPost(post + 1);
  };

  const handleScroll = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    });

    observerRef.current.observe(document.querySelector('.gallery-container'));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image) => (
        <div key={image.id}>
            <p>
                {image.id}
            </p>
            <p>
                {image.title}
            </p>
            <p>
                {image.body}
            </p>
            </div>

      ))}
    </div>
  );
}

export default PostLazy;