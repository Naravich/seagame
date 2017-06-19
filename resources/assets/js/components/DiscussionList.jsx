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
            <div>{comment.title}</div>
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
                <tr><td width="100%">
                <DiscussionComment key={data.ID} comment={data} /></td>
                <td> <button onClick={()=>this.delTask(item)}>Delete</button>   
                                 </td></tr>
            );
        });
        return (
            <tbody>
                {DiscussionComments}
            </tbody>
        );
    }
});
 

    // render() {
    //     var displayTask = (item,id) => 
    //                         <tr key={id} >
    //                             <td width="100%">{item}</td>
    //                             <td> <button onClick={()=>this.delTask(item)}>Delete</button>   
    //                             </td></tr>;
    //     return(<tbody>{this.props.items.map(displayTask)}</tbody>);
    // }
// module.exports = DiscussionList;
export default DiscussionList;