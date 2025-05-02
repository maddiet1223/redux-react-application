import './App.css';
import Counter from './Counter';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

//Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.num };
    case 'DECREASE':
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
};

const store = configureStore({reducer});



function App() {
  return (
    <Provider store={store}>
     <Counter />
    </Provider>
  );
}

export default App;
