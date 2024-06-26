import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 70%;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input, textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }
`;

const Btn = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  width: 140px;
`

const BlogPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const posts = useMemo(() => JSON.parse(localStorage.getItem('posts')) || [], []);
  const post = useMemo(() => (isEditing ? posts[id] : { title: '', author: '', content: '', date: '' }), [isEditing, id, posts]);

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [date, setDate] = useState(post.date);

  useEffect(() => {
    if (isEditing && !post) {
      navigate('/');
    }
  }, [isEditing, post, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && content && date) {
      const newPost = { title, author, content, date };
      if (isEditing) {
        posts[id] = newPost;
      } else {
        posts.push(newPost);
      }
      localStorage.setItem('posts', JSON.stringify(posts));
      navigate('/');
    } else {
      alert('All fields are required');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            rows="5"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="date">Publication Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormField>
        <Btn type="submit">Save</Btn>
      </Form>
    </FormContainer>
  );
};

export default BlogPostForm;
