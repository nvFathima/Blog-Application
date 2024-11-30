import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css'; // Importing a CSS file for custom styles

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">RandomBlogs.com</h1>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
