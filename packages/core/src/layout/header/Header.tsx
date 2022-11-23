import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BaseButton } from '../../components/common';
import { useLogged } from '../../hooks/useLogged';
import LogoIcon from './LogoIcon';

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
    <Link to='/search' className='search'>
      <FaSearch />
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
      <Inner>
        <div className='left'>
          <LogoIcon />
        </div>
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
      </Inner>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  height: 56px;
  text-align: center;
  position: sticky;
  top: 0;
  background: ${(p) => p.theme.palette.highlight};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: auto;

  .right {
    display: flex;
    align-items: center;

    & > * {
      margin-left: 5px;
    }

    .search {
      font-size: 1.6rem;
      display: flex;

      svg {
        color: ${(p) => p.theme.palette.icon};
      }
    }

    .user {
      ${(p) => p.theme.typography.caption}
    }
  }
`;

export default Header;
