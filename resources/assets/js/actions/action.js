
var axios = require('axios');
export const CREATE_TASK='create_task';
const ROOT_URL='/api'
const api_token=window.Laravel.apiToken;
const API_KEY='?api_token='+api_token;
export function deleteTask(key){
	console.log("delete action");
	const request = axios.delete(`${ROOT_URL}/task/${key}${API_KEY}`)
	
	var api_token=window.Laravel.apiToken;
	var url='http://192.168.10.10/api/tasks?api_token='+api_token;
	// console.log(url);

	const taskobj = axios.get(url);

	// console.log(taskobj);
	// var len = $.map(taskobj.tasks, function(n, i) { return i; }).length;
	// console.log(len);
	
	return{
  	 type: 'TASK_DELETE',
	 payload:taskobj
    // out.tasks[],
  	};
	// console.log(key);

  // return{
  //   type: 'TASK_DELETE',
  //   key
  // };
}
export function load(){
	console.log('load action');
	var api_token=window.Laravel.apiToken;
	var url='http://192.168.10.10/api/tasks?api_token='+api_token;
	console.log(url);

	const taskobj = axios.get(url);

  return{
  	 type: 'TASK_LOAD',
	 payload:taskobj
    // out.tasks[],
  };
}

export function createTask(values) {

	const request = axios.post(`${ROOT_URL}/task${API_KEY}`,values)
	console.log('createTask...');
	console.log('load action');
	var api_token=window.Laravel.apiToken;
	var url='http://192.168.10.10/api/tasks?api_token='+api_token;
	console.log(url);

	const taskobj = axios.get(url);
	return{
		type:'FETCH_TASKS',
		payload:taskobj
	};
}

export function testAction() {
	console.log('test...');
}