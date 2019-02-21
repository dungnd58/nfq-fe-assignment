import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Root from './components/root';
import thunk from 'redux-thunk';
import './styles/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Root store={store}/>,
  document.getElementById('root')
)

