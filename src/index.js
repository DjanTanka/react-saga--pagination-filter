import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '../src/redux/store';
import { history } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>,
   
  document.getElementById('root')
);


