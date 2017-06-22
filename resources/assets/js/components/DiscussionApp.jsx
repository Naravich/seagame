
import React, { Component } from 'react';
import { connect } from 'react-redux';
 import DiscussionForm from './DiscussionForm';
 import DiscussionList from '../containers/DiscussionList';
 // import {load} from '../actions/action';
class DiscussionApp extends Component {
    
    componentDidMount() {
    // load() 
    }
    render(){
        return (
            <div>
                <DiscussionForm />
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
                                        <DiscussionList />                                       
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// module.exports = DiscussionApp;
export default DiscussionApp;
// export default (DiscussionForm);