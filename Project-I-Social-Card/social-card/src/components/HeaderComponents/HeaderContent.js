import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js'

const HeaderContent = () => {
  return (
    <div>
      <HeaderTitle />
      <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel confortable using componentsyou are well on your way to mastering React.</p>
    </div>
  );
};

export default HeaderContent;
