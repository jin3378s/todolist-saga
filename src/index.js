
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import toDoListReducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  toDoListReducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
