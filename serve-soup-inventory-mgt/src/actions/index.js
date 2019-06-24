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
