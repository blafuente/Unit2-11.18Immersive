// console.log("sanity check");

function updateTimer(){
    // new Date() will create a new date object with current time time
    // where current time = the moment the line ran

    var now = new Date();
    // getTime() can be run against a Date Object, and will convert to the #
    // of the miliseconds since 1-1-1970
    var nowAsTimestamp = now.getTime();
    // console.log(nowAsTimestamp);
    var timeRemaining = timeStamp - nowAsTimestamp;
    // console.log(timeRemaining);

    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    
    console.log(weeks,days,hours,minutes,seconds);

    // getElementsByClassName ALWAYS returns an Array, even if there is 0 or 1 thing
    document.getElementsByClassName('weeks')[0].innerHTML = weeks;
    // document.getElementsByClassName('days')[0].innerHTML = days;
    // document.getElementsByClassName('hours')[0].innerHTML = hours;
    // document.getElementsByClassName('minutes')[0].innerHTML = minutes;
    // document.getElementsByClassName('seconds')[0].innerHTML = seconds;

    // querySelector will use css rules to find a match,
    // and only get the first one... NOT an Array
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

}

var endDate = new Date("December 25, 2018");
console.log(endDate);
var timeStamp = endDate.getTime();
console.log(timeStamp);
// setInterval will: 
// 1. call the function in arg1
// 2. every arg2 miliseconds
setInterval(updateTimer,1000)
