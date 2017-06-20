import {Link} from 'react-router-dom'
var React = require('react');
var Home = React.createClass({
    render: function() {
    	return(
          <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Dashboard</div>

                        <div className="panel-body">
                            
                            <Link to="/tasks">Tasks route</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        );
    }
});

export default Home;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 

// var DiscussionApp = require('./DiscussionApp.jsx');<a href="/tasks">Tasks</a>
// var DiscussionList = require('./DiscussionList.jsx');