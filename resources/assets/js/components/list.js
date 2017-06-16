import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Tasklist extends Component {
	delTask(item) {
		console.log(item);
  		this.props.delete(item);
  		
  	}
	
    render() {
    	var displayTask = (item,id) => 
    						<tr key={id} >
	                            <td width="100%">{item}</td>
	                            <td> <button onClick={()=>this.delTask(item)}>Delete</button>	
	                            </td></tr>;
    	return(<tbody>{this.props.items.map(displayTask)}</tbody>);
    }
}

export default Tasklist;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
