// var DiscussionForm = require('./DiscussionForm.jsx');
// var DiscussionApp = require('./DiscussionApp.jsx');

var React = require('react');
 import DiscussionApp from './DiscussionApp';
 
// สร้าง component ที่จะใช้แสดงตัว comment
var DiscussionComment = React.createClass({
    render: function() {
        
        // รับข้อมูล comment ที่จะแสดงผ่านทาง props
        var comment = this.props.comment;
        return (
            <li>{comment.title}</li>
        );
    }
});
 
// สร้าง component ที่จะเอาไว้ทำ iteration
var DiscussionList = React.createClass({
    render: function() {
        
        // วนลูป array ของ comments ที่ได้มาจาก props 
        // แล้วส่งต่อให้ DiscussionComment นำไปแสดงผล
        var DiscussionComments = this.props.comments.map(function(data, index) {
            return (
                <DiscussionComment key={data.ID} comment={data} />
            );
        });
        return (
            <ul>
                {DiscussionComments}
            </ul>
        );
    }
});
 
// module.exports = DiscussionList;
export default DiscussionList;