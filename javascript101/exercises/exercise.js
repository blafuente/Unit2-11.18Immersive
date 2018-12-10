//Hello, you!
function hello(name) {
    
    if(name > ""){
        console.log("Hello " + name +"!");
    } else {
        console.log("Hello World!");
    }
}

hello('Brian');
hello();

//MadLib
function madLib(name,subject){
    console.log(name + "'s favorite subject is " + subject);
}
madLib('Brian', "math.")

//print numbers
function printNumbers(x, y){
    for (x=1; x < y+1; x++)
        console.log(x);
}
printNumbers(1,10);

//print a square
// function printSquare(s) {
//     for (i=0; i < s; i * "*") {
//         console.log(i); 
//     }
// }
// printSquare(5);


// var array = ["Lachan", "Kim", "Moira"];
function greetPerson() {
    var array = ["Lachan", "Kim", "Moira"];
    while (array > "") {
        greet = array.pop();
        console.log("Hello " + greet);
    }
}
greetPerson();

function binaryCount() {
    num = [0,1,0,1,1,1,0,0];
    b = num.pop();
    a = num.indexOf(b);
    console.log(a);
    }
binaryCount();