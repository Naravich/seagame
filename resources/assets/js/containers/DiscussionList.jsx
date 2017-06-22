// var DiscussionForm = require('./DiscussionForm.jsx');
// var DiscussionApp = require('./DiscussionApp.jsx');
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {load} from '../actions/action';
import reducer from '../reducers/index'
import * as actions from '../actions/action';
import _ from 'lodash';

// สร้าง component ที่จะใช้แสดงตัว comment
class DiscussionComment extends Component {  
    
    delTask(item) {

    }
    render() {
        
        // รับข้อมูล comment ที่จะแสดงผ่านทาง props line 23 <button onClick={()=>this.delTask(comment)}>Delete</button>   
        var comment = this.props.comment;
        return (
            <tr><td width="100%">
            <div>{comment.name}</div>
            </td>
                <td> <button className="btn btn-danger" onClick={()=>this.delTask(comment)}>Delete</button>

                                 </td></tr>
        );
    }
}
 
// สร้าง component ที่จะเอาไว้ทำ iteration
// var tasks ={
//     name:"",
// }
class DiscussionList extends Component { 
    //   constructor(props) {
    //     super(props);
    //     this.state = {tasks: []};
    // }
    componentDidMount() {
       this.props.load();
       // this.props.testAction();
    }
    renderTasks(){
            return _.map(this.props.tasks,task => {
                return(
                        <DiscussionComment key={task.id} comment={task} />

                    );

            });
        }
    render() {

        // this.props.load() 
       // var task=load();        // วนลูป array ของ comments ที่ได้มาจาก props 
        // แล้วส่งต่อให้ DiscussionComment นำไปแสดงผล
        // console.log(this.props.tasks);
        
        return (
            <tbody>
                {this.renderTasks()}
            </tbody>
        );
    }
}
 
function mapStateToProps(state){
    // เมื่อ state ใน store มีการเปลี่ยนแปลง
  // เราไม่สนใจทุก state
  // เราสนใจแค่ state ของ pages
  // โดยทำการติดตั้ง pages ให้เป็น props
  // เราใช้ชื่อ key ของ object เป็นอะไร
  // key ตัวนั้นจะเป็นชื่อที่เรียกได้จาก props ของคอมโพแนนท์
    return { tasks: state.loadpage };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({load:load}, dispatch);
}
export default connect(mapStateToProps, actions)(DiscussionList);