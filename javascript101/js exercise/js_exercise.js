//Exercise 1
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days = {
    Sunday: 'Sleep-In',
    Monday: 'Go to work',
    Tuesday: 'Go to work',
    Wednesday: 'Go to work',
    Thursday: 'Go to work',
    Friday: 'Go to work',
    Saturday: 'Sleep-In',
}
var day = prompt("What day is it? Sunday-Saturday ");
console.log(day);
console.log(days[day]);

//Exercise 2
//Given a month number, between 1 and 12, 
//and a year, print the number of days in that month 
//- accounting for leap years.
var month = prompt("Enter a month 1-12");
var year = prompt("Enter a year: ")

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    console.log("This month has 31 days.");
} else if (month == 4 || month == 6 || month == 9 || month == 11){
    console.log("This month has 30 days.");
} else if (month == 2) {
    if (year % 4 == 0){
        console.log("This month has 29 days.")    
    } else if (year % 100 == 0){
        console.log("This month has 28 days.");
    }   
}

//Exercise 3
//Tip service
var bill = parseFloat(prompt("Enter Bill amount "));
var service = prompt("How was service? [good/fair/bad] ");
if (service == "good"){
    sum = bill + (bill* 0.20);
} else if (service == "fair") {
    sum = bill + (bill * 0.15);
} else if (service == "bad") {
    sum = bill + (bill * 0.10);
}
sum *= 100;
sum = Math.ceil(sum);
sum /= 100;
console.log("The total bills is now $" + sum);

function splitAmount(sum, numOfPeople){
    total = sum/numOfPeople;
    total *= 100;
    total = Math.ceil(total);
    total /= 100;
    console.log("The total bill is $" + sum + ". Split among " + numOfPeople + " is $" + total);
}
numOfPeople = parseInt(prompt("Enter the number in the party: "))
splitAmount(sum, numOfPeople);

var tipAmounts = {
    poor: 0.10,
    fair: 0.15,
    good: 0.20,
}
console.log("The total bill is $" + ((bill * tipAmounts[service]) + bill));