import React from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { doLogIn } from '../../../actions';
import GenericHeader from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

function LoginForm({
  doLogIn,
  loadingUser,
  history,
  error,
}) {
  const emailRef = React.createRef();
  const passRef = React.createRef();

  const LogIn = () => {
    const user = {
      username: emailRef.current.value,
      password: passRef.current.value,
    };
    doLogIn(user, history);
  };
  if (loadingUser) {
    return (
      <p>Logging In</p>
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
      <GenericHeader fontSize={80} color="black">Sign In</GenericHeader>
      <Input type="email" placeholder="Email Address" ref={emailRef} />
      <Input type="password" placeholder="Password" ref={passRef} />
      <Button onClick={LogIn}>Sign In</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  loadingUser: state.user.loadingUser,
  error: state.user.error,
});

export default connect(mapStateToProps, { doLogIn })(LoginForm);

LoginForm.propTypes = {
  doLogIn: pt.func.isRequired,
  loadingUser: pt.bool.isRequired,
  error: pt.string.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
