import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);


ReactDOM.render(<Provider store={ store }><App></App></Provider>, document.querySelector('#root'));

// import { createStore } from 'redux';


// console.log(store.getState());


// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

// store.dispatch({
//     type: 'ADD_PICTURE',
//     payload: 'picture data'
// });
// store.dispatch({
//     type: 'ADD_PICTURE',
//     payload: 'picture data 1'
// });