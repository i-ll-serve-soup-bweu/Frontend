import React from 'react';
import { connect } from 'react-redux';

import { doLogIn } from '../../../actions';
import GenericHeader from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button'; 

export function LoginForm (props){
  const emailRef = React.createRef();
  const passRef = React.createRef();

  const doLogIn = () => {
    const user = {
      username: emailRef.current.value,
      password: passRef.current.value,
    }
    props.doLogIn(user, props.history);
  }
  if (props.loadingUser) 
  return (
    <p>Logging In</p>
  )

  if (props.error) 
  return (
    <>
      <p>{props.error}</p>
      <Button>Try Again</Button>
    </>
  )

  return (
    <div>
      <GenericHeader fontSize={80} color='black'>Sign In</GenericHeader>
      <Input type='email' placeholder='Email Address' ref={emailRef}/>
      <Input type='password' placeholder='Password' ref={passRef}/> 
      <Button onClick={doLogIn}>Sign In</Button>     
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loadingUser: state.user.loadingUser,
    error: state.user.error
  }
}

export default connect(mapStateToProps, { doLogIn })(LoginForm)
