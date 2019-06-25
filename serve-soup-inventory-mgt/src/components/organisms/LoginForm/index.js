import React from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import styled from 'styled-components';

import { doLogIn } from '../../../actions';
import {
  StyledButton, StyledRegisterCard, StyledHeading, HorizontalBar, StyledInput,
} from '../../atoms';

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
      <p>Signing In</p>
    );
  }

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading>Join</StyledHeading>
          <HorizontalBar width="90%" />
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

// function LoginForm({
//   doLogIn,
//   loadingUser,
//   history,
//   error,
// }) {
//   const emailRef = React.createRef();
//   const passRef = React.createRef();

//   const LogIn = () => {
//     const user = {
//       username: emailRef.current.value,
//       password: passRef.current.value,
//     };
//     doLogIn(user, history);
//   };
//   if (loadingUser) {
//     return (
//       <p>Logging In</p>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <p>{error}</p>
//         <Button onClick={() => window.location.reload()}>Try Again</Button>
//       </>
//     );
//   }

//   return (
//     <div>
//       <GenericHeader fontSize={80} color="black">Sign In</GenericHeader>
//       <Input type="email" placeholder="Email Address" ref={emailRef} />
//       <Input type="password" placeholder="Password" ref={passRef} />
//       <Button onClick={LogIn}>Sign In</Button>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   loadingUser: state.user.loadingUser,
//   error: state.user.error,
// });

// export default connect(mapStateToProps, { doLogIn })(LoginForm);

// LoginForm.propTypes = {
//   doLogIn: pt.func.isRequired,
//   loadingUser: pt.bool.isRequired,
//   error: pt.string.isRequired,
//   history: pt.shape(historyPropTypes).isRequired,
// };
