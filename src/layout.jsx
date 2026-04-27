import React from 'react';
import Header from '../src/components/header/header.jsx'; 
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header /> 
      <main>
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;