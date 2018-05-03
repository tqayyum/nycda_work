/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MovieListApp from './components/MovieListApp.jsx';

ReactDOM.render(
	<Provider store={store}>
	  <MovieListApp />
	</Provider>,
  document.getElementById('root')
);
