import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@/common/stylus/index.styl';
import Route from './router';
import store from './store';
// import 'lib-flexible';
import { remInit } from '@/common/js/util'
import FastClick from 'fastclick';
import * as serviceWorker from './serviceWorker';

FastClick.attach(document.body)

remInit()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  )
}
  
render(Route)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
