import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { BaseButton } from '../../components/common';
import { useLogged } from '../../hooks/useLogged';

type HeaderProps = {
  logo?: string;
};

const Header: FC<HeaderProps> = ({ logo = 'logo.png' }) => {
  const logged = useLogged();

  const logoFragment = (
    <>
      {logo && (
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + logo} alt='logo' />
        </Link>
      )}
    </>
  );

  const SearchFragment = (
    <Link to='/search'>
      <RiSearchLine />
    </Link>
  );

  const LoginFragment = (
    <Link to='/login'>
      <BaseButton buttonType='text'>Login</BaseButton>
    </Link>
  );

  const SignUpFragment = (
    <Link to='/signup'>
      <BaseButton buttonType='primary'>SignUp</BaseButton>
    </Link>
  );

  const UserFragment = <span className='user'>{logged?.nickname!}</span>;

  return (
    <HeaderBlock>
      <div className='left'>{logoFragment}</div>
      <div className='right'>
        {SearchFragment}
        {logged ? (
          <>{UserFragment}</>
        ) : (
          <>
            {LoginFragment}
            {SignUpFragment}
          </>
        )}
      </div>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  text-align: center;
  position: sticky;
  top: 0;
  background: ${(p) => p.theme.palette.highlight};

  .left {
    img {
      height: 50px;
    }
  }

  .right {
    & > * {
      margin-left: 5px;
    }

    .user {
      ${(p) => p.theme.typography.caption}
    }

    svg {
      color: ${(p) => p.theme.palette.icon};
    }
  }
`;

export default Header;
