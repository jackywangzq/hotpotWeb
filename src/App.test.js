import {Provider} from 'react-redux'
import reduce from './reduce/reduce.js'
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

it('renders without crashing', () => {
  const store = createStore(reduce)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App/></Provider>,div);
  ReactDOM.unmountComponentAtNode(div);
  });