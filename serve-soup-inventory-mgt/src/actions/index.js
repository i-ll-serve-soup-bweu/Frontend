import axios from 'axios';

const SoupApiURL = 'https://be-soup.herokuapp.com';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_INVENTORY = 'GET_INVENTORY';
export const GET_KITCHEN = 'GET_KITCHEN';
export const LOADING_USER = 'LOADING_USER';
export const LOADING_INVENTORY = 'LOADING_INVENTORY';
export const LOADING_KITCHEN = 'LOADING_KITCHEN';
export const ERROR = 'ERROR';

export const signUpOrLogIn = (user) => {
  return {
    type: LOGIN,
    payload: user,
  }
}

export const logOut = () => {
  return {
    type: LOGOUT,
  }
}

export const getInventory = (inventory) => {
  return {
    type: GET_INVENTORY,
    payload: inventory,
  }
}

export const getKitchen = (kitchen) => {
  return {
    type: GET_KITCHEN,
    payload: kitchen,
  }
}

export const genericAction = (type, payload) => {
  return {
    type,
    payload,
  }
}

export const doSignUp = (user) => dispatch => {
  dispatch(genericAction(LOADING_USER, true));
  const { username, password, name, lastName, type } = user;
  axios.post(`${SoupApiURL}/register`, {username, password, name, lastName, type})
    .then(() => dispatch(doLogIn(user)))
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_USER, false)))
}

export const doLogIn = (user) => dispatch => {
  dispatch(genericAction(LOADING_USER, true));
  const { username, password } = user;
  axios.post(`${SoupApiURL}/login`, {username, password})
    .then(response => {
      dispatch(signUpOrLogIn(response))
      localStorage.setItem('soupUserToken', response.token)
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_USER, false)))
}