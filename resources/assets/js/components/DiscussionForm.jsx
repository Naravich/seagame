// var DiscussionApp = require('./DiscussionApp.jsx');
// var DiscussionList = require('./DiscussionList.jsx');
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { taskAdd } from '../actions/action';
import { bindActionCreators } from 'redux';
 
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
            //this ===component
            console.log(values);
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
                                    name="task"
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
    //console.log(values)->{task:'asdf'}
    const errors={};
    if(!values.task){
        errors.task="Please enter a task";
    }
    //Validate the inputs from 'values'
    return errors;
}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(DiscussionForm);
 //module.exports = DiscussionForm;