import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderContent from './HeaderContent.js'

const HeaderContainer = () => {
  return (
    <header className="appHeader">
      <ImageThumbnail />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;
