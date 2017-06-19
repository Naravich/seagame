var React = require('react');
 
// โหลด component ลูก มาใช้
// var DiscussionForm = require('./DiscussionForm.jsx');
// var DiscussionList = require('./DiscussionList.jsx');
 import DiscussionForm from './DiscussionForm';
 import DiscussionList from './DiscussionList';
// สร้าง component แม่
var DiscussionApp = React.createClass({
   getInitialState: function() {
        return {
            allMessages: []
        };
    },
 
    // สร้าง method สำหรับเซฟ comment
    _addComment: function(message) {
        
        // สร้าง unique id ขึ้นมา
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        
        // เตรียม object ของ comment ที่จะเซฟ
        var newMessage = [{
            'ID': id,
            'title': message
        }];
 
        // รวม comment ใหม่ เข้ากับ comment ที่มีอยู่เดิม
        this.setState({
            allMessages: newMessage.concat(this.state.allMessages)
        });
    },
    render: function() {
        return (
            <div>
                
                 <DiscussionForm handleSubmit={this._addComment}  />
                 <div className="container">
            <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Current Tasks
                        </div>
                        <div className="panel-body">
                            <div className="col-md-12 ">
                                <table className="table table-striped task-table">
                                    <thead>
                                            <th width="80%">Task</th>
                                            <th>delete</th>
                                    </thead>
                            <DiscussionList comments={this.state.allMessages}/>
                </table>
                            </div>
                            </div>
                        </div>
        </div>
        </div></div>
        );
    }
});
 
//module.exports = DiscussionApp;
export default DiscussionApp;