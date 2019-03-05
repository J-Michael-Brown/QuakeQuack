import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import QuakeListReducer from './reducers/QuakeListReducer';
import thunkMiddleware from 'redux-thunk';
import './index.css';


const store = createStore(QuakeListReducer, applyMiddleware(thunkMiddleware));


const render = ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



let unsubscribe = store.subscribe(() =>
  console.log(store.getState())

);
