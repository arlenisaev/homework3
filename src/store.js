import { createStore } from 'redux';

const initialState = {
  user: {
    name: '',
    age: '',
    gender: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value
        }
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
