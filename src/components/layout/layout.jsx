import React from 'react';
import Navbar from '../navbar/navbar';
import SearchField from '../../elements/searchField/searchField'


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SearchField/>
      <div className="page-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
