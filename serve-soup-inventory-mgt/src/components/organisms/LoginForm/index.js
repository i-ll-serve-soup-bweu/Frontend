import React from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import styled from 'styled-components';

import { doLogIn } from '../../../actions';
import {
  StyledButton, StyledRegisterCard, StyledHeading, HorizontalBar, StyledInput, LoaderContainer,
} from '../../atoms';

const Outer = styled.div`
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  margin: 30px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginForm = ({
  doLogIn, history, loadingUser, error,
}) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const onLogIn = (event) => {
    event.preventDefault();
    const user = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };
    doLogIn(user, history);
  };
  if (loadingUser) {
    return (
      <LoaderContainer text="signing in..." />
    );
  }

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading>Sign in</StyledHeading>
          <HorizontalBar width="100%" />
          <Form>
            <StyledInput
              register
              placeholder="Email"
              ref={emailRef}
            />
            <StyledInput
              register
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <StyledButton
              primary
              onClick={event => onLogIn(event)}
            >
              Login
            </StyledButton>
            {
              error && <p>{error}</p>
            }
          </Form>
        </Inner>
      </StyledRegisterCard>
    </Outer>
  );
};

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
