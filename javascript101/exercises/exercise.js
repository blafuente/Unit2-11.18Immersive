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
//     for (i=0; i < s+1; s * "*") {
//         console.log(s); 
//     }
// }
// printSquare(5);