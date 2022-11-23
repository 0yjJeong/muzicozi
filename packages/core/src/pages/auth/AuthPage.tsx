import React, { useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { LoginForm, SignUpForm } from '../../containers/auth';
import { useLogged } from '../../hooks/useLogged';

function AuthPage() {
  const isLoginPage = useMatch('/login');
  const logged = useLogged();
  const navigation = useNavigate();

  useEffect(() => {
    if (logged) {
      navigation('/', { replace: true });
    }
  }, [logged]);

  return <>{isLoginPage ? <LoginForm /> : <SignUpForm />}</>;
}

export default AuthPage;
