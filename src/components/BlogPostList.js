import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const PostItem = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  flex: 1 0 45%;
  box-sizing: border-box;

  @media (min-width: 600px) {
    max-width: 45%;
  }
`;

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <PostList>
      {posts.map((post, index) => (
        <PostItem key={index}>
          <h2>{post.title}</h2>
          <p>by {post.author}</p>
          <p>{post.content.substring(0, 100)}...</p> {/* Generating summary */}
          <p>{post.date}</p>
          <Link to={`/post/${index}`}>Read More</Link>
        </PostItem>
      ))}
    </PostList>
  );
};

export default BlogPostList;
