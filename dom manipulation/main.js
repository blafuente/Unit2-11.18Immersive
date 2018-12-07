console.dir(document);

var brian = document.getElementById("briansDiv");

console.dir(brian)

brian.innerHTML = "I just changed this text."

brian.style.backgroundColor = "pink"

// var newImage = document.createElement("img");
// newImage.src = "https://placehold.it/300x300";
// document.getElementById("briansDiv").appendChild(newImage)

brian.innerHTML += `
    <img src="https://placehold.it/200x200" />
`
var response = prompt("I'm a prompt");
console.log(response);

// var simplifiedDocument = {
//     children[
//         {
//             tag: "<html>",
//             children [
//                 {
//                     tag: "<head>"
//                 },
//                 {
//                     tag: "<body>"
//                 }
//             ]
//         }
//     ]
// }

// simplifiedDocument.children[0].children[1]