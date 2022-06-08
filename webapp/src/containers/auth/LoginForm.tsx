import React, { FormEvent } from 'react';
import { useMutation } from 'react-query';
import { BaseButton } from '../../components/common';
import { Form } from '../../components/form';
import { LabeledInput } from '../../components/labeledInput';
import useInput from '../../hooks/useInput';
import { Message } from '../../components/message';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../lib/queries';

function LoginForm() {
  const loginMutation = useMutation(login);
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();

  React.useEffect(() => {
    if (loginMutation.isSuccess) {
      if (!loginMutation.data.error) {
        localStorage.setItem('token', JSON.stringify(loginMutation.data));
        navigate('/');
      }
    }
  }, [loginMutation.data, loginMutation.isSuccess]);

  const messageFragment = loginMutation.isSuccess &&
    loginMutation.data?.error && <Message message={loginMutation.data.error} />;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    loginMutation.mutate({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className='header'>
        <div className='title'>Login to Muzicozi</div>
        {messageFragment}
      </div>
      <div className='content'>
        <LabeledInput label='Email' {...email} />
        <LabeledInput label='Password' {...password} />
      </div>
      <div className='footer'>
        <BaseButton buttonType='primary' type='submit'>
          Login
        </BaseButton>
        <div className='wizard'>
          Don't have an account yet?
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </Form>
  );
}

export default LoginForm;
