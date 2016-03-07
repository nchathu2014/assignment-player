import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//add Middleware

let finalCreateStore = compose(
  applyMiddleware(thunk,logger())
)(createStore)


export default function configureStore(initialState = {  }) {
  return finalCreateStore(reducer, initialState)
}