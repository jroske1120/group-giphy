import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import sagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';




//const dummyReducer
const dummyReducerList = (state = ['https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'], action) => {
    if (action.type === 'ADD_FAV') {
        //update state to add the name to the list
        return [...state, action.payload]
    }
    return state;
  }

const storeInstance = createStore(
    combineReducers({
        dummyReducerList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(logger),
);

// Pass rootSaga into our sagaMiddleware

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('react-root'));
