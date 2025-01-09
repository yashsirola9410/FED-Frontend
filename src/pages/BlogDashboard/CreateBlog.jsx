/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from '../BlogDashboard/styles/CreateBlog.module.scss';

function CreateBlog() {
  
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
  });

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [id]: value, 
    }));
  };

  
  const handleSubmit = () => {
    console.log(blogData); 
    alert(`Blog Submitted: Title - ${blogData.title}, Content - ${blogData.content}`);
  };

  return (
    <div className={styles.blogDashBoard}>
      <h1 className={styles.heading}>Create a New Blog</h1>

      
      <div className={styles.title}>
        <label htmlFor="title">TITLE</label>
        <input
          className={styles.input_one}
          type="text"
          id="title"
          value={blogData.title} 
          onChange={handleChange} 
          placeholder="Enter blog title"
        />
      </div>

      
      <div className={styles.content}>
        <label htmlFor="content">CONTENT</label>
        <input
          className={styles.input_two}
          type="text"
          id="content"
          value={blogData.content} 
          onChange={handleChange} 
          placeholder="Enter blog content"
        />
      </div>

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Blog
      </button>
    </div>
  );
}

export default CreateBlog;
