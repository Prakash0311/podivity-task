import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #e6f9ff;
  color: black;
  padding: 40px;
  shadow: 100px;
`;

const Header = () => {
  return (
    <>
    <Navbar>
      <Link to="/">Home</Link>
      <h1>My Blogs</h1>
      <Link to="/add">Add Post</Link>
    </Navbar>
    <img src='https://pixabay.com/photos/blog-internet-web-technology-media-2355684/' alt='blog-img' />
    </>
  );
};

export default Header;
