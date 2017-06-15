import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';


class Listrow extends Component {
    render() {
    	return(
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
	                            <th>&nbsp;</th>
	                        </thead>

	                          
	            <div id="taskcu"></div></table>

	            </div>
	            </div>
	        </div>
	    </div>
		</div>
        );
    }
}
export default Listrow;

if (document.getElementById('Listrow')) {
    ReactDOM.render(<Listrow />, document.getElementById('Listrow'));
}
