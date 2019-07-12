const {format} = require('timeago.js');



const helpers = {};


helpers.timeago=(timestamp)=>{
    return format(timestamp,'my-locale');
}
module.exports = helpers;