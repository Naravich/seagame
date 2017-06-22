import { combineReducers } from 'redux'
import reducer from './reducers'
import { reducer as formReducer } from 'redux-form';

// ใช้ combineReducers เพื่อรวม reducer แต่ละตัวเข้าเป็นหนึ่ง
// export default combineReducers({
// 	  constructor(props) {
//         this.state = {tasks: null};
//     },
//   // ES2015 มีค่าเท่ากับ pages: pages
//   // pages ตัวแรกที่เป็น key ของอ็อบเจ็กต์บอกว่า
//   // เราจะใช้คำว่า pages เป็นคำในการเข้าถึง
//   reducer
// })
const rootReducer = combineReducers({
  loadpage: reducer,
  form:formReducer
});
export default rootReducer