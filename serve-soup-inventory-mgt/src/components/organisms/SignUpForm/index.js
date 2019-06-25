import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { doSignUp } from '../../../actions';
import { StyledButton, StyledRegisterCard, StyledHeading, HorizontalBar, StyledInput } from '../../atoms';

const Outer = styled.div`
  width: 55%;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpForm = (props) => {
  const emailRef = React.createRef();
  const passRef = React.createRef();
  const nameRef = React.createRef();
  const lastNameRef = React.createRef();

  const doSignUp = event => {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      username: emailRef.current.value,
      password: passRef.current.value,
      type: 'manager'
    }
    props.doSignUp(user, props.history);
  }

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading>Join</StyledHeading>
          <HorizontalBar width='90%' />
          <Form>
            <StyledInput
              register
              placeholder='First Name'
              ref={nameRef}
            />
            <StyledInput
              register
              placeholder='Last Name'
              ref={lastNameRef}
            />
            <StyledInput
              register
              placeholder='Email'
              ref={emailRef}
            />
            <StyledInput
              register
              placeholder='Confirm Email'
              ref={lastNameRef}
            />
            <StyledInput
              register
              placeholder='Password'
              type='password'
              ref={passRef}
            />
            <StyledButton
              primary
              onClick={(event) => doSignUp(event)}
            >
              Sign Up
            </StyledButton>
          </Form>
        </Inner>
      </StyledRegisterCard>
    </Outer>
  )
}

const mapStateToProps = state => {
  return {
    loadingUser: state.user.loadingUser,
    error: state.user.error
  }
}

export default connect(mapStateToProps, { doSignUp })(SignUpForm)
