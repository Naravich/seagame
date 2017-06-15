import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tasklist from './list';
import Listrow from './listrow';

class Example extends Component {
	constructor() {
    super();
    this.state = {
    	curitems: '1',
      items: [],
       round: '1',
    	};
  	}


  	changtxt(ev) {
	    this.setState({
	curitems: ev.target.value,
    });
  	}

  	dolist() {
	   ReactDOM.render(<Tasklist items={this.state.items}
	   							onclick={'sd'}
	   	/>, document.getElementById('taskcu'));
  	}

  	addTask(e) {
  		if(this.state.curitems==""){
  			alert("Please Insert Name Task");
  		}
  		else{
  			this.state.items.push(this.state.curitems);
this.setState({arrayvar:this.state.arrayvar},this.dolist());
	    	
	   }
  	}

    render() { 
    	return(
    		<div>
    		<div className="container">
    			<div className="row">
		    		<div className="panel panel-default">
		    			<div className="panel-heading">New Task</div>
		    			<div className="panel-body">
		            		<div className="col-md-12 ">
		                        <div className="form-group">
		                            <label form="task-name" className="col-sm-3 control-label">Task</label>
		                            <div className="col-sm-6"> 
		                            	<input type="text" name="name" id ="task-name" className="form-control" onChange={(ev) => this.changtxt(ev)}/>
		                            </div>
		                            
		                        </div>

		                        <div className="form-group">
		                            <div className="col-sm-offset-3 col-sm-6">
		                                <button className="btn btn-default" onClick={(e) => this.addTask(e)}>
									        Add Task
									    </button>
		                            </div>
		                        </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		</div>
        );

    }
}

export default Example;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}