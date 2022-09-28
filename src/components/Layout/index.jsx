import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import LayoutContainer from './styles';

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
