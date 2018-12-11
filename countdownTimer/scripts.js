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

    // querySelector will use css rules to find a match,
    // and only get the first one... NOT an Array
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    // == compares values
    // === compares values AND datatype
    // minutes = "0";
    // minutes == 0 TRUE 
    // mintues === 0 NOT TRUE 
    if(seconds === 0){ 
        // update the dom to say "Hooray, another minute closer!"
        document.querySelector('.message').innerHTML = "One minute closer to Christmas!";
    }else if(seconds < 57){
        document.querySelector('.message').innerHTML="";
    }

}

function handleClick(){
    document.querySelector('body').classList.add('bg');
    var endDate = new Date("Feburary 11, 2019");
    var timeStamp = endDate.getTime();
    updateTimer();   
    
}

var endDate = new Date("December 25, 2018");
// console.log(endDate);
var timeStamp = endDate.getTime();
// console.log(timeStamp);
// setInterval will: 
// 1. call the function in arg1
// 2. every arg2 miliseconds
updateTimer();
setInterval(updateTimer,1000)


document.querySelector('button').addEventListener("click",handleClick)