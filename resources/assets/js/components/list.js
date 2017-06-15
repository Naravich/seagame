import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Tasklist extends Component {

	
    render() {
    	var displayTask = (task) => 
    						<tr key={Math.random()} >
	                            <td width="80%">{task}</td><td>
	                            <button className="btn btn-danger" >
									Add Task
								</button>	
	                            </td></tr>;
    	return(<tbody>{this.props.items.map(displayTask)}</tbody>);
    }
}

export default Tasklist;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
