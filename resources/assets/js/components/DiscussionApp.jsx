var React = require('react');
 
// โหลด component ลูก มาใช้
// var DiscussionForm = require('./DiscussionForm.jsx');
// var DiscussionList = require('./DiscussionList.jsx');
 import DiscussionForm from './DiscussionForm';
 import DiscussionList from './DiscussionList';
 import {Link} from 'react-router-dom'

// โหลด Store มาใช้
var DiscussionStore = require('../stores/DiscussionStore');
 
// โหลด Action มาใช้
var DiscussionActions = require('../actions/DiscussionActions');

// สร้าง component แม่
var DiscussionApp = React.createClass({
   // getInitialState: function() {
   //      return {
   //          allMessages: []
   //      };
   //  },
   //  //method for del
    // delTask(task) {
    //     console.log(task);
    //     const newState = this.state.items;
    //     if (newState.indexOf(allMessages) > -1) {
    //         newState.splice(newState.indexOf(allMessages), 1);
    //       this.setState({allMessages: newState})
    //     }
    // },
   //  // สร้าง method สำหรับเซฟ comment
   //  _addComment: function(message) {
        
   //      // สร้าง unique id ขึ้นมา
   //      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        
   //      // เตรียม object ของ comment ที่จะเซฟ
   //      var newMessage = [{
   //          'ID': id,
   //          'title': message
   //      }];
 
   //      // รวม comment ใหม่ เข้ากับ comment ที่มีอยู่เดิม
   //      this.setState({
   //          allMessages: newMessage.concat(this.state.allMessages)
   //      });
   //  },

   // 4 methods ด้านล่างนี้เป็น pattern
    getInitialState: function() {
        // ดึง state ผ่านทาง Store แทน
        return DiscussionStore.getState();
    },
    componentDidMount: function() {
        // รอฟังว่า Store จะแจ้งว่ามีการเปลี่ยนแปลงเมื่อไร
        DiscussionStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        // พอ component จะถูกถอดออก ก็เลิกรอ
        DiscussionStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        // เมื่อ Store แจ้งว่ามีการเปลี่ยนแปลง ก็สั่งให้อัพเดท state ซะ
        // โค้ดตรงนี้แหละ ที่ทำให้ component ถูก render ใหม่
        this.setState(DiscussionStore.getState());
    },
 
    render: function() {

        // ดึง comment จาก Store แทนการดึงจาก state
        var comments = DiscussionStore.getAll();
        return (
            <div>
                <Link to="/home">home</Link>
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
                            <DiscussionList comments={comments} />
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