import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  img {
    height: 50px;
  }
`;

function LogoIcon() {
  const logoUrl = process.env.PUBLIC_URL + 'logo.png';

  return (
    <Logo to='/'>
      <img src={logoUrl} alt='logo' />
    </Logo>
  );
}

export default LogoIcon;
