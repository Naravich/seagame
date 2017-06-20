require('./bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');
import { render } from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
// โหลด component หลักมา
//var DiscussionApp = require('./components/DiscussionApp.jsx');
 // import Example from './components/Example';
 import DiscussionApp from './components/DiscussionApp';
 import Home from './components/home';
// แสดงผล component หลัก ที่ #app
// if (document.getElementById('DiscussionApp')) {
// 	ReactDOM.render(<DiscussionApp /> , document.getElementById('DiscussionApp'));
// }
// if (document.getElementById('home')) {
// 	ReactDOM.render(<Home/>, document.getElementById('home'));//browser router
// }
  ReactDOM.render(
  <BrowserRouter> 
 	<div> 
    <Route path='/home'  component={Home}/>
     <Route path='/tasks'  component={DiscussionApp}/>
     </div>
  </BrowserRouter>, document.getElementById('DiscussionApp'));