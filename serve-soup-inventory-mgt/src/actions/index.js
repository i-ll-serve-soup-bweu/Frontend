import axios from 'axios';
import axiosWithToken from '../axios';

const SoupApiURL = 'https://be-soup.herokuapp.com';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOADING_USER = 'LOADING_USER';
export const GET_KITCHEN = 'GET_KITCHEN';
export const LOADING_KITCHEN = 'LOADING_KITCHEN';
export const ADD_KITCHEN = 'ADD_KITCHEN';
export const GET_INVENTORY = 'GET_INVENTORY';
export const LOADING_INVENTORY = 'LOADING_INVENTORY';
export const ADD_INVENTORY_ITEM = 'ADD_INVENTORY_ITEM';
export const UPDATE_INVENTORY_ITEM = 'UPDATE_INVENTORY_ITEM';
export const DELETE_INVENTORY_ITEM = 'DELETE_INVENTORY_ITEM';
export const ERROR = 'ERROR';

export const signUpOrLogIn = user => ({
  type: LOGIN,
  payload: user,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const getInventory = inventory => ({
  type: GET_INVENTORY,
  payload: inventory,
});

export const addInventoryItem = item => ({
  type: ADD_INVENTORY_ITEM,
  payload: item,
});

export const getKitchen = kitchen => ({
  type: GET_KITCHEN,
  payload: kitchen,
});

export const addKitchen = kitchen => ({
  type: ADD_KITCHEN,
  payload: kitchen,
});

export const genericAction = (type, payload) => ({
  type,
  payload,
});

export const doLogIn = (user, history) => (dispatch) => {
  dispatch(genericAction(LOADING_USER, true));
  const { username, password } = user;
  axios.post(`${SoupApiURL}/login`, { username, password })
    .then((response) => {
      const { username, userID } = response.data;
      const user = {
        username,
        userID,
      };
      dispatch(signUpOrLogIn(response));
      dispatch(genericAction(LOGIN, user));
      localStorage.setItem('soupUserToken', response.data.token);
      localStorage.setItem('soupUserID', userID);
      history.push('/');
    })
    .catch((error) => {
      dispatch(genericAction(ERROR, error.message));
    })
    .finally(() => dispatch(genericAction(LOADING_USER, false)));
};

export const doSignUp = (user, history) => (dispatch) => {
  dispatch(genericAction(LOADING_USER, true));
  const {
    username, password, name, lastName, type,
  } = user;
  axios.post(`${SoupApiURL}/register`, {
    username, password, name, lastName, type,
  })
    .then(() => dispatch(doLogIn(user, history)))
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_USER, false)));
};

export const doLogOut = () => (dispach) => {
  localStorage.removeItem('soupUserToken');
  dispach(logOut());
};

export const doGetInventory = kitchenId => (dispatch) => {
  dispatch(genericAction(LOADING_INVENTORY, true));
  axiosWithToken().get(`${SoupApiURL}/kitchen/${kitchenId}/item`)
    .then((response) => {
      dispatch(getInventory(response.data));
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_INVENTORY, false)));
};

export const doGetKitchen = () => (dispatch) => {
  dispatch(genericAction(LOADING_KITCHEN, true));
  const userID = localStorage.getItem('soupUserID');
  axiosWithToken().get(`${SoupApiURL}/kitchen`)
    .then((response) => {
      if (response.data[0] && userID) {
        const kitchen = response.data.filter(kitchen => kitchen.km_id === Number(userID))[0];
        dispatch(getKitchen(kitchen));
        if (kitchen) dispatch(doGetInventory(kitchen.id));
      }
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_KITCHEN, false)));
};

export const doAddKitchen = (kitchen, history) => (dispatch) => {
  dispatch(genericAction(LOADING_KITCHEN, true));
  axiosWithToken().post(`${SoupApiURL}/kitchen`, kitchen)
    .then((response) => {
      dispatch(addKitchen(response.data));
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => {
      history.push('/');
      dispatch(genericAction(LOADING_KITCHEN, false));
    });
};

export const doAddInventoryItem = (item, history) => (dispatch) => {
  dispatch(genericAction(LOADING_INVENTORY, true));
  axiosWithToken().post(`${SoupApiURL}/kitchen/${item.kitchen_id}/item`, item)
    .then((response) => {
      dispatch(addInventoryItem(response.data));
    })
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => {
      history.push('/');
      dispatch(genericAction(LOADING_INVENTORY, false));
    });
};

export const doUpdateInventoryItem = (item, id, history) => (dispatch) => {
  dispatch(genericAction(LOADING_INVENTORY, true));
  axiosWithToken().put(`${SoupApiURL}/kitchen/${item.kitchen_id}/item/${id}`, item)
    .then(() => history.push('/'))
    .catch(error => dispatch(genericAction(ERROR, error.message)))
    .finally(() => dispatch(genericAction(LOADING_INVENTORY, false)));
};
