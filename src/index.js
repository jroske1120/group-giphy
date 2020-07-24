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
  yield takeEvery('ADD_FAVE', addFavSaga);

}

// function* getGiphySaga(action) {
//   try {
//     const response = yield axios.get('/api/search')
//     yield console.log('back with:', response.data.data);
//     // console.log('search is:', action.payload)
//     put ({type: "FETCH_IMAGE", payload: response.data})
//   } catch (error) {
//     console.log('issue with saga:', error);
//   }
// }

function* getGiphySaga(action){
  // console.log('trying to send:', action.payload)
  try {
    const response = yield axios.get('/api/search', {params: {search: action.payload}})
    yield put({type:"FETCH_IMAGE", payload: response.data.data})
  } catch (error) {
    console.log('issue with saga:', error)
  }
}

function* addFavSaga(action) {
  try {
      yield axios.post('/api/favorite', action.payload);
      yield put({ type: 'FETCH_FAVE' });
  } catch (error) {
      console.log('error with post/add request', error);
  }
}

const searchResultReducer = (state=[], action) => {
  if (action.type === "FETCH_IMAGE"){
    console.log('searchResult!:', action.payload)
    return action.payload;
  }
  return state;
}

const favReducer = (state=[], action) => {
  console.log('FAVORITED!:', action.payload)
  if (action.type === "ADD_FAVE"){
    return  [...state, action.payload];
  }
  return state;
}
const sagaMiddleware = createSagaMiddleware();




const store = createStore(
  combineReducers({
    searchResultReducer,
    favReducer
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
