// const initialState = []
import _ from 'lodash'
import {FETCH_POSTS} from '../actions/action';
const ROOT_URL='/api'
const api_token=window.Laravel.apiToken;
const API_KEY='?api_token='+api_token;
// reducer นั้นเป็นฟังก์ชันที่รับพารามิเตอร์สองตัว
// คือสถานะก่อนหน้า (previous state) และอ็อบเจ็กต์ action
// ตัวอย่างเช่นถ้าเราจะเพิ่มหน้าวิกิใหม่ สถานะก่อนหน้าอาจเป็นหน้าวิกิทั้งหมด
// เมื่อ reducer ทำงานเสร็จจะเพิ่มวิกิใหม่มี่เราพึ่งสร้าง เข้าไปในสถานะก่อนหน้าซึ่งก็คือวิกิทั้งหมดที่มีอยู่ก่อน
// ในกรณีที่เราไม่มีสถานะก่อนหน้า เราบอก reducer ว่าให้ใช้ค่า initialState
// ซึ่งก็คืออาร์เรย์ว่างเปล่าเป็นสถานะตั้งต้น
// สำหรับ [] ใน pages reducer นี้หมายความว่า
// เริ่มต้นนั้นเราไม่มีหน้าวิกิอยู่ในระบบเลย
export default (
  state = {


  }, action) => {
  
  switch(action.type) {
    case 'TASK_DELETE':
      function countProperties (obj) {
          var count = 0;

          for (var property in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, property)) {
                  count++;
              }
          }

          return count;
      }
      var Count = countProperties(action.payload.data.tasks);
      // console.log('Task load after delete');
      // console.log(Count);
      // console.log(action.payload.data.tasks);
      // var Countnext=Count-1;
      // console.log(Countnext);
      // while(Count!=Countnext){
      //   console.log('while');
      //   // var api_token=window.Laravel.apiToken;
      //   // var url='http://192.168.10.10/api/tasks?api_token='+api_token;
      //   // // console.log(url);

      //   // const taskobj = axios.get(url);

      //   // Count = countProperties(taskobj.tasks);
      // }
      // console.log(_.mapKeys(action.payload.data.tasks,'id'));
      // console.log('reducer'+action.JSONItems.tasks);
      return _.mapKeys(action.payload.data.tasks,'id')
    // เมื่อไหร่ก็ตามที่ action มีชนิดเป็น RECEIVE_PAGES
    // ให้แกะดูข้อมูล pages จากก้อนอ็อบเจ็กต์ action
    // pages นี้คือหน้าวิกิทั้งหมด
    // เราคืนค้ากลับออกไปจาก reducer เป็นวิกิทั้งหมดที่ได้จากอ็อบเจ็กต์ action
    case 'RECEIVE_PAGES':
      return action.pages
    case 'TASK_LOAD':
      console.log('Task load');
       console.log(_.mapKeys(action.payload.data.tasks,'id'));

      // console.log('reducer'+action.JSONItems.tasks);
      return _.mapKeys(action.payload.data.tasks,'id')
    case 'FETCH_TASKS':
      console.log('Task load after add');
       console.log(_.mapKeys(action.payload.data.tasks,'id'));

      // console.log('reducer'+action.JSONItems.tasks);
      return _.mapKeys(action.payload.data.tasks,'id')
    // ในกรณีที่ไม่มี action ตรงกลับที่ระบุให้คืนค่ากลับออกจาก reducer เป็น state ตัวเดิม
    default:
      // console.log('default');
      return state

  }
}