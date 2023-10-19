import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import { createStore } from 'redux';


const initialState ={
  count : 0
};

function reducer( state= initialState, action){
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1 
      };
    case 'DECREMENT':
      return {
        count: state.count - 1 
      };
    case 'RESET':
      return initialState;
      
    default :
      return state;
  }
  
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
      <Counter />
    </Provider>
);
  
render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
