import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
  yield takeEvery('SET_IMAGE', getGiphySaga);
}

function* getGiphySaga(action) {
  try {
    const response = yield axios.get('/api/category')
  } catch (error) {
    console.log('issue with saga:', error);
  }
}

const sagaMiddleware = createSagaMiddleware();




const store = createStore(
  combineReducers({
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
