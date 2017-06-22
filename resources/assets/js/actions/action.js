
var axios = require('axios')

export function taskAdd(text){
    return{
      type: 'TASK_ADDED',
      text,
    };
}

export function deleteTask(key){
  return{
    type: 'TASK_DELETE',
    key
  };
}
export function load(){
	console.log('load action');
	var api_token=window.Laravel.apiToken;
	var url='http://192.168.10.10/api/tasks?api_token='+api_token;
	// console.log(url);

	const taskobj = axios.get(url);

  return{
  	 type: 'TASK_LOAD',
	 payload:taskobj
    // out.tasks[],
  };
}

export function testAction() {
	console.log('test...');
}