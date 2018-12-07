console.log("Hello World!");

console.log("hi");


console.log("hello")

// if 1 == 1:
//     print "hi"
// python conditional


//JavaScript equalivent 
var brian = "hello";
if (brian == "suh dude") {
    console.log("the condition is true")
} else if (brian == "hello") {
    console.log("brian was hello")
} else if ( brian == "yo") {
    console.log("brian was yo");
} else {
    console.log('brian wasn\'t any of the above');
}

//while loops
var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter ++;
}

console.log("we're done with our while loop!")

var string = "";
while (string != "aaaaa") {
    console.log(string)
    string += "a";
}
console.log("we're done with our while loop!")

var array = [];
while (array.length < 5 ) {
    array.push("brian");
    console.log(array)
}

// for loops
for (var i=0; i<10; i = i + 1) {
    console.log("i'm in a for loop")
}

// functions
function briansFunction() {
    console.log("I'm in a function")
}
briansFunction();

// anonymous functions
var anonFunction = function () {
    console.log("anon");
}

anonFunction();

var briansArray = ["a", "b", "c", "d"];
var reversed = [];

while (briansArray.length > 0) {
    var popped = briansArray.pop();
    reversed.push(popped);
    // reversed.push(briansArray.pop());
}
console.log(reversed);