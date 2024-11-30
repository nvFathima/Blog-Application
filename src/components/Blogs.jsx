import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Blogs.css'; // Import a CSS file for styling

const Blogs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    axios.post("http://localhost:3000/users/blogs", data)
      .then(response => {
        console.log(response.data);
        alert("Blog Added Successfully");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="blogs-container">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="blog-form">
        {/* Blog Name */}
        <div className="form-group">
          <label htmlFor="blogName">Blog Name</label>
          <input
            type="text"
            id="blogName"
            {...register('blogName', { required: "Blog Name is required" })}
          />
          {errors.blogName && <span className="error">{errors.blogName.message}</span>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            {...register('description', { required: "Description is required" })}
          ></textarea>
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>

        {/* Author */}
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            {...register('author', { required: "Author is required" })}
          />
          {errors.author && <span className="error">{errors.author.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Add Blog</button>
      </form>
    </div>
  );
};

export default Blogs;
