import React from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { doSignUp } from '../../../actions';
import GenericHeader from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

function SignUpForm({
  doSignUp,
  history,
  loadingUser,
  error,
}) {
  const emailRef = React.createRef();
  const passRef = React.createRef();
  const nameRef = React.createRef();
  const lastNameRef = React.createRef();
  const signUp = () => {
    const user = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      username: emailRef.current.value,
      password: passRef.current.value,
      type: 'manager',
    };
    doSignUp(user, history);
  };
  if (loadingUser) {
    return (
      <p>Signing up</p>
    );
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </>
    );
  }

  return (
    <div>
      <GenericHeader fontSize={80} color="black">Sign Up</GenericHeader>
      <Input placeholder="First Name" ref={nameRef} />
      <Input placeholder="Last Name" ref={lastNameRef} />
      <Input type="email" placeholder="Email Address" ref={emailRef} />
      <Input type="password" placeholder="Password" ref={passRef} />
      <Button onClick={signUp}>Sign Up</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  loadingUser: state.user.loadingUser,
  error: state.user.error,
});

export default connect(mapStateToProps, { doSignUp })(SignUpForm);

SignUpForm.propTypes = {
  doSignUp: pt.func.isRequired,
  loadingUser: pt.bool.isRequired,
  error: pt.string.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
