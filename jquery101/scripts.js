// jQuery is a JavaScript library.
// That means jQuery IS JS 
// jQuery CANNOT live without JS.jQuery

// jQuery allows you to change stuff, but doens't keep track of the changes
// in a big.... this is CONFUSING!!!
// React, Angular, and Vue are the answer to this

// jQuery directly manipulates the DOM
// This is expensive - takes a lot of rescoures
// React and other use "virtul" which is efficient 

// A $ means I'm writing JS, but not just any JS, I'm writing jQuery
// console.log($);

// targeting stuff
console.dir(document.getElementsByTagName('div'));
console.dir(document.querySelector('.container'));
console.dir(document.getElementsByClassName('container'));
console.dir($('.container'));
$('#row');
console.log($('#row p'));

// jQuery targets with CSS rules.
// jQuery adds listeners as CanvasPathMethods... ie, click = .click()
// a listener takes 1 arg: code to run when event happens
$('#hide').click(function(){
    console.log('someone clicked on hide');
})