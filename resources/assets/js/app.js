require('./bootstrap');
import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise'
// เราต้องใช้ AppContainer จาก hor-loader
// เพื่อครอบคอมโพแนนท์บนสุดของแอพพลิเคชันเราชื่อ Root
// เพื่อให้ทุกๆสิ่งภายใต้คอมโพแนนท์ Root มีคุณสมบัติ HMR ได้
import { AppContainer } from 'react-hot-loader'
// เพื่อให้ hot loader ทำงานสมบูรณ์เราต้องมีเพียงหนึ่งคอมโพแนนท์
// ที่ห่อหุ้มภายใต้ AppContainer โดยคอมโพแนนท์นั้นเราตั้งชื่อว่า Root
import DiscussionApp from './components/DiscussionApp'
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const rootEl = document.getElementById('App')

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/tasks" component={DiscussionApp} />
      </div>
    </BrowserRouter>
  </Provider>

  ,
  rootEl
)

