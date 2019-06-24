import * as types from '../actions';

const initialState = {
  user: {},
  kitchen: {},
  inventory: [],
  loadingUser: false,
  loadingInventory: false,
  error: '',
}

export function inventoryReducer(state= initialState, action) {
  switch(action.type) {
    case (types.GET_INVENTORY):
      return { ...state, inventory: action.payload };
    case (types.LOADING_INVENTORY):
      return { ...state, loadingInventory: action.payload };
    case (types.ERROR):
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

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