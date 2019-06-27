import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { doSignUp } from '../../../actions';
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

const SignUpForm = ({
  doSignUp, history, loadingUser, error,
}) => {
  const emailRef = React.createRef();
  const passRef = React.createRef();
  const nameRef = React.createRef();
  const lastNameRef = React.createRef();

  const signUp = (event) => {
    event.preventDefault();
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
      <LoaderContainer text="signing up..." />
    );
  }

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading>Join</StyledHeading>
          <HorizontalBar width="100%" />
          <Form>
            <StyledInput
              register
              placeholder="First Name"
              ref={nameRef}
            />
            <StyledInput
              register
              placeholder="Last Name"
              ref={lastNameRef}
            />
            <StyledInput
              register
              placeholder="Email"
              ref={emailRef}
            />
            <StyledInput
              register
              placeholder="Confirm Email"
              ref={lastNameRef}
            />
            <StyledInput
              register
              placeholder="Password"
              type="password"
              ref={passRef}
            />
            <StyledButton
              primary
              onClick={event => signUp(event)}
            >
              Sign Up
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

export default connect(mapStateToProps, { doSignUp })(SignUpForm);

SignUpForm.propTypes = {
  doSignUp: pt.func.isRequired,
  loadingUser: pt.bool.isRequired,
  error: pt.string.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
