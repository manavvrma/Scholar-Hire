// @ts-nocheck
import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <div className='container'>
      <h1>Student Recruitment System</h1>
      <h2>Enter Your Name</h2>
      <PostCreate />
      <hr />
      <h1>All Resumes</h1>
      <hr className="separator" />
      <h5>Enter SKills</h5>
      <h5>Enter CGPA</h5>
      <h5>Enter Backlogs</h5>
      <hr className="separator" />
      <PostList />
    </div>
  );
};
