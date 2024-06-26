import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;
const Btn = styled.button`
  color: #fff;
  background-color: #404040;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 12px;
  border: 0;
  border-radius: 5px;
`

const BlogView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts[id];

  const handleDelete = () => {
    const updatedPosts = posts.filter((_, index) => index !== parseInt(id));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.content}</p>
      <p>{post.date}</p>
      <Btn onClick={() => navigate(`/edit/${id}`)}>Edit</Btn>
      <Btn onClick={handleDelete}>Delete</Btn>
    </PostContainer>
  );
};

export default BlogView;
