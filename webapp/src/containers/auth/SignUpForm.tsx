import React, { FormEvent } from 'react';
import {
  pipe,
  prop,
  map,
  match,
  mergeWith,
  head,
  values,
  all,
  is,
} from 'ramda';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { BaseButton } from '../../components/common';
import { Form } from '../../components/form';
import { LabeledInput } from '../../components/labeledInput';
import useInput from '../../hooks/useInput';
import { Message } from '../../components/message';
import { signup } from '../../lib/apis';

function SignUpForm() {
  const signUpMutation = useMutation(signup);
  const [error, setError] = React.useState<string | null>(null);
  const email = useInput();
  const password = useInput();
  const nickname = useInput();

  const messageFragment = signUpMutation.data ? (
    signUpMutation.isSuccess && signUpMutation.data.error ? (
      <Message message={signUpMutation.data.error} />
    ) : (
      <Message message='User registered successfully!' type='success' />
    )
  ) : (
    error && <Message message={error} />
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const checkedValues = pipe(
      map(prop('value')),
      mergeWith(
        (a, b) => head(match(a)(b)),
        [
          new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z]+?.[a-zA-Z]{2,3}(.[a-z]{2})?$/g),
          new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,24}$/g),
          new RegExp(/^[a-z0-9]{4,12}$/),
        ]
      ),
      values
    )([email, password, nickname]);

    if (all(is(String))(checkedValues)) {
      if (error) {
        setError(null);
      }

      signUpMutation.mutate({
        email: email.value,
        password: password.value,
        nickname: nickname.value,
      });
    }

    if (checkedValues[0] === undefined) {
      setError('Invalid email.');
    } else if (checkedValues[1] === undefined) {
      setError('Invalid password.');
    } else if (checkedValues[2] === undefined) {
      setError('Invalid nickname.');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className='header'>
        <div className='title'>Create account</div>
        {messageFragment}
      </div>
      <div className='content'>
        <LabeledInput label='Email' {...email} />
        <LabeledInput
          label='Password'
          caption='8-24 characters, must contain a number and an uppercase & lower case letter.'
          {...password}
        />
        <LabeledInput
          label='Nickname'
          caption='4-12 characters'
          {...nickname}
        />
      </div>
      <div className='footer'>
        <BaseButton buttonType='primary' type='submit'>
          Sign Up
        </BaseButton>
        <div className='wizard'>
          Already have an account?
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </Form>
  );
}

export default SignUpForm;
