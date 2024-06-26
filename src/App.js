import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogView from './components/BlogView';
import BlogPostForm from './components/BlogPostForm';
import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogView />} />
          <Route path="/add" element={<BlogPostForm />} />
          <Route path="/edit/:id" element={<BlogPostForm />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
