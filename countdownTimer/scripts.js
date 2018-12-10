// console.log("sanity check");

function updateTimer(){
    // new Date() will create a new date object with current time time
    // where current time = the moment the line ran

    var now = new Date();
    // getTime() can be run against a Date Object, and will convert to the #
    // of the miliseconds since 1-1-1970
    var nowAsTimestamp = now.getTime();
    console.log(nowAsTimestamp);
}

var endDate = new Date("December 25, 2018");
console.log(endDate);
var timeStamp = endDate.getTime();
console.log(timeStamp);
// setInterval will: 
// 1. call the function in arg1
// 2. every arg2 miliseconds
setInterval(updateTimer,1000)
