import React from 'react';
import { useMatch } from 'react-router-dom';
import { LoginForm, SignUpForm } from '../../containers/auth';

function AuthPage() {
  const isLoginPage = useMatch('/login');

  return <>{isLoginPage ? <LoginForm /> : <SignUpForm />}</>;
}

export default AuthPage;
