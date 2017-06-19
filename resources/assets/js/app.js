require('./bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');
 
// โหลด component หลักมา
//var DiscussionApp = require('./components/DiscussionApp.jsx');
 import Example from './components/Example';
 import DiscussionApp from './components/DiscussionApp';
// แสดงผล component หลัก ที่ #app
ReactDOM.render(<DiscussionApp /> , document.getElementById('DiscussionApp'));
// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }