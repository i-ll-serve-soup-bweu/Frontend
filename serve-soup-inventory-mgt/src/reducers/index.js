import { combineReducers } from 'redux';

import * as types from '../actions';

const initialState = {
  user: {},
  kitchen: {},
  inventory: [],
  loadingUser: false,
  loadingInventory: false,
  loadingKitchen: false,
  error: '',
};

export function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case (types.GET_INVENTORY):
      return { ...state, inventory: action.payload };
    case (types.LOADING_INVENTORY):
      return { ...state, loadingInventory: action.payload };
    case (types.ADD_INVENTORY_ITEM):
      return { ...state, inventory: state.inventory.concat(action.payload) };
    case (types.DELETE_INVENTORY_ITEM):
      return { ...state, inventory: state.inventory.filter(item => item.id !== action.payload) };
    case (types.ERROR):
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case (types.LOGIN):
      return { ...state, user: action.payload };
    case (types.LOGOUT):
      return {};
    case (types.LOADING_USER):
      return { ...state, loadingUser: action.payload };
    case (types.GET_KITCHEN):
      return { ...state, kitchen: action.payload };
    case (types.LOADING_KITCHEN):
      return { ...state, loadingKitchen: action.payload };
    case (types.ERROR):
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer,
  inventory: inventoryReducer,
});

/*

initialState = {
  kitchen = {
    name: ''
    location: ''
    description: ''
    id: ''
  },
  inventory = [
    {
      name: ''
      quantity: int
      measurementUnit: ''
      category: ''
      kitchenId: ''
    }
  ],
  user = {
    username/email: '',
    name: '',
    lastName: '',
    userId: int
  },
  loadingUser: bool,
  loadingInventory: bool,
  error: ''
}
*/
