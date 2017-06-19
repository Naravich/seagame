// var DiscussionApp = require('./DiscussionApp.jsx');
// var DiscussionList = require('./DiscussionList.jsx');
var React = require('react');
 import DiscussionApp from './DiscussionApp';
var DiscussionForm = React.createClass({
 
    // กำหนด message ให้เป็น state ที่มีค่าเริ่มต้นเป็นค่าว่าง
    getInitialState: function() {
        return {
            message: ''
        };
    },
 
    // เมื่อ user พิมพ์ comment ให้อัพเดท message 
    // ให้เป็นค่าเดียวกับที่ user พิมพ์มา
    _onChange: function(event) {
        this.setState({
            message: event.target.value
        });
    },
 
    // เมื่อฟอร์มถูก submit ให้เซฟค่า message ที่อยู่ใน state 
    // โดยใช้ method ที่ได้รับมาจาก props ที่ชื่อ handleSubmit
    _onSubmit: function(event) {
        if(this.state.message){
        event.preventDefault();
        this.props.handleSubmit(this.state.message);
        
        // จากนั้นก็ reset ค่า message ให้เป็นค่าว่างเหมือนเดิม
        this.setState({
            message: ''
        });
        }
    },
 
    // ผูก event ต่างๆ เข้ากับ element
    // พร้อมกับกำหนด value ของช่องกรอก comment ให้มีค่าตาม message
    render: function() {
        return (

            <div className="container">
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">New Task</div>
                        <div className="panel-body">
                            <div className="col-md-12 ">
                            <form onSubmit={this._onSubmit}>
                                <div className="form-group">
                                    <label form="task-name" className="col-sm-3 control-label">Task</label>
                                    <div className="col-sm-6"> 
                                        <input type="text" className="form-control" 
                                        placeholder="Enter message here..." 
                                        onChange={this._onChange}
                                        value={this.state.message}
                                        />
                                    </div>
                                    
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-6">
                                        
                                        <button className="btn btn-default" onClick={this._onSubmit}>Comment</button>
                                    </div>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



            
        );
    }
});
 export default DiscussionForm;
 //module.exports = DiscussionForm;