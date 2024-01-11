import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      login(state, action) {
        state.isAuthenticated = true;
      },
      logout(state, action) {
        state.isAuthenticated = false;
      },
    }
  });

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
