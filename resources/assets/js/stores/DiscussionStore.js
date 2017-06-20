
var AppDispatcher = require('../dispatcher/AppDispatcher');
var DiscussionConstants = require('../constants/DiscussionConstants');
 
// setup Store (copy ได้เลย เพราะมันเป็น pattern)
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _state = {};
var _comments = [];
 
// private method ของ Store สำหรับเซฟ comment 
// (ย้ายมาจาก DiscussionApp)
function addData(comment) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var newMessage = [{
        'ID': id,
        'title': comment
    }];
    _comments = newMessage.concat(_comments);
}
 
function delTask(comment) {
  		console.log(comment);
  		const newState =_comments;
	  	if (newState.indexOf(comment) > -1) {
	    	newState.splice(newState.indexOf(comment), 1);
	      _comments=newState;
	    }
  	}
// public method ต่างๆ ของ Store
var DiscussionStore = assign({}, EventEmitter.prototype, {
 
    // ดึงข้อมูล state ในตอนนั้นๆ
    getState: function() {
        return _state;
    },
 
    // ดึง comment ทั้งหมดในตอนนั้นๆ
    getAll: function() {
        return _comments;
    },
 
    // 3 methods ด้านล่างนี้เป็น pattern
    // ใช้สำหรับแจ้ง component หลัก ว่าถึงเวลา render ใหม่แล้ว
    // เนื่องจากข้อมูลมีการอย่างเปลี่ยนแปลง
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
 
});
 
 
// จับคู่ method ของ Store เข้ากับ actionType ต่างๆ
AppDispatcher.register(function(action) {
 
    // เมื่อ Dispatcher ได้รับ actionType แบบนี้ ให้ใช้ method ตัวไหน
    switch (action.actionType) {
        case DiscussionConstants.DISCUSSION_CREATE:
            addData(action.comment);
            break;
        case DiscussionConstants.DISCUSSION_DELETE:
        	delTask(action.comment);
        	break;
        default:
            // no op
    }
    
    // พอทำ callback เสร็จแล้ว ก็แจ้งกลับไปยัง component หลัก 
    // ว่าเกิดการเปลี่ยนแปลงแล้วนะ
    DiscussionStore.emitChange();
});
 
module.exports = DiscussionStore; 