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
  yield takeEvery('SET_FAVORITE', getFavoriteSaga);
  yield takeEvery('SET_FAVORITE', setFavoriteSaga);
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

// gets search results
function* getGiphySaga(action){
  // console.log('trying to send:', action.payload)
  try {
    const response = yield axios.get('/api/search', {params: {search: action.payload}})
    yield put({type:"FETCH_IMAGE", payload: response.data.data})
  } catch (error) {
    console.log('issue with search saga:', error)
  }
}
// gets favorites from database
function* getFavoriteSaga(action){
  try {
    const response = yield axios.get('/api/favorite')
    yield put({type: "FETCH_FAVORITE", payload: response.data})
  } catch (error) {
    console.log('issue with favorite saga:', error)
  }
}
// sets favorite image 
function* setFavoriteSaga(action){
  try {
    // console.log('setfav generator:', action.payload)
    const response = yield axios.post('/api/favorite', action.payload)
    yield put({type: "FETCH_FAVORITE", payload: response.data})
  } catch (error) {
    console.log('issue with setting favorite:', error)
  }
}

// fetches search results
const searchResultReducer = (state=[], action) => {
  if (action.type === "FETCH_IMAGE"){
    console.log('searchResult!:', action.payload)
    return action.payload;
  } 
  return state;
}
// fetches favorite images
const favoriteImageReducer = (state = [], action) => {
  if (action.type === "FETCH_FAVORITE"){
    console.log('favorite images:', action.payload)
    return action.payload;
  }
  return state
}

const sagaMiddleware = createSagaMiddleware();




const store = createStore(
  combineReducers({
    searchResultReducer,
    favoriteImageReducer,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
