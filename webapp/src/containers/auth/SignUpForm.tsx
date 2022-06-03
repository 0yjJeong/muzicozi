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
import { BaseButton } from '../../components/common';
import { Form } from '../../components/form';
import { LabeledInput } from '../../components/labeledInput';
import useInput from '../../hooks/useInput';
import { ErrorMessage } from '../../components/errorMessage';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [error, setError] = React.useState('');
  const email = useInput();
  const password = useInput();
  const nickname = useInput();

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
    }

    if (checkedValues[0] === undefined) {
      setError('Invalid email');
    } else if (checkedValues[1] === undefined) {
      setError('Invalid password');
    } else if (checkedValues[2] === undefined) {
      setError('Invalid nickname');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className='header'>
        <div>Create account</div>
        {error && <ErrorMessage message={error} />}
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
          Sign up
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
