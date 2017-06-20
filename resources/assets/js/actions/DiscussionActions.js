var AppDispatcher = require('../dispatcher/AppDispatcher');
 
// โหลด actionType ต่างๆ มาใช้
var DiscussionConstants = require('../constants/DiscussionConstants');
 
// รวม Action ต่างๆ ในแอป
var DiscussionActions = {
 
    // เมื่อเกิด Action นี้ให้ทำอะไร ?
    addComment: function(comment) {
        
        // บอกว่า Action นี้ เป็นแบบ DISCUSSION_CREATE นะ
        // พร้อมกับส่งค่า comment พ่วงไปด้วย
        AppDispatcher.dispatch({
            actionType: DiscussionConstants.DISCUSSION_CREATE,
            comment: comment,
        });
    },
    delTask: function(comment) {
        
        // บอกว่า Action นี้ เป็นแบบ DISCUSSION_CREATE นะ
        // พร้อมกับส่งค่า comment พ่วงไปด้วย
        AppDispatcher.dispatch({
            actionType: DiscussionConstants.DISCUSSION_DELETE,
            comment: comment,
        });
    }
};


module.exports = DiscussionActions;