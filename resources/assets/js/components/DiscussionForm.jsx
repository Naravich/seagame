// var DiscussionApp = require('./DiscussionApp.jsx');
// var DiscussionList = require('./DiscussionList.jsx');
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { taskAdd } from '../actions/action';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {createTask , load} from '../actions/action';


 
class DiscussionForm extends Component {  
    renderField(field){
        
        const {meta: {touched,error} }=field;
        const className=`form-group ${touched && error ? 'has-error':''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    placeholder="Enter Task here..."
                    type ="text"
                    {...field.input}
                />
                <div className="control-label">
                {touched ? error :''}</div>
            </div>
            );
    }
    onSubmit(values) {
            console.log(values);
            this.props.createTask(values);
            this.props.load();

        }
    render() {
        const {handleSubmit}=this.props;
        
        return (

            <div className="container">
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">New Task</div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field 
                                    lable="Task"
                                    name="name"
                                    component={this.renderField}
                                />
                                <button type="submit" className="btn btn-danger">Add</button>
                                   
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            
        );
    }
}

function validate(values){
    // console.log(values)->{task:'asdf'}
    const errors={};
    if(!values.name){
        errors.name="Please enter a task";
    }
    //Validate the inputs from 'values'
    return errors;
}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(
    connect(null,{createTask ,load})(DiscussionForm)
);
 //module.exports = DiscussionForm;