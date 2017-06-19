
var keyMirror = require('keymirror');
 
module.exports = keyMirror({
    DISCUSSION_CREATE: null
 
    // หากอนาคตจะเพิ่มฟีเจอร์ให้สามารถแก้ไขและลบ comment ได้ด้วย
    // ก็ให้เพิ่ม actionType ตรงนี้ได้เลย
    // DISCUSSION_EDIT: null,
    // DISCUSSION_DELETE: null
});