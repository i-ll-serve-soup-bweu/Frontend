import React from 'react';
import { connect } from 'react-redux';

import { doSignUp } from '../../../actions';
import GenericHeader from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button'; 

export function SignUpForm (props){
  const emailRef = React.createRef();
  const passRef = React.createRef();
  const nameRef = React.createRef();
  const lastNameRef = React.createRef();

  const doSignUp = () => {
    const user = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      username: emailRef.current.value,
      password: passRef.current.value,
      type: 'manager'
    }
    props.doSignUp(user, props.history);
  }
  if (props.loadingUser) 
  return (
    <p>Signing up</p>
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
      <GenericHeader fontSize={80} color='black'>Sign Up</GenericHeader>
      <Input placeholder='First Name' ref={nameRef}/>
      <Input placeholder='Last Name' ref={lastNameRef}/>
      <Input type='email' placeholder='Email Address' ref={emailRef}/>
      <Input type='password' placeholder='Password' ref={passRef}/> 
      <Button onClick={doSignUp}>Sign Up</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loadingUser: state.user.loadingUser,
    error: state.user.error
  }
}

export default connect(mapStateToProps, { doSignUp })(SignUpForm)
