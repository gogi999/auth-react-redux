import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
});

export default store;

/*
import { createStore } from 'redux';

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1, 
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'INCREASE') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'TOGGLE') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
*/
