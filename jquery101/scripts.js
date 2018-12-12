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
    // console.log('someone clicked on hide');
    $('#thing').hide();
})
$('#show').click(function(){
    // console.log('someone clicked on hide');
    $('#thing').show();
})
$('#toggle').click(function(){
    // console.log('someone clicked on hide');
    $('#thing').toggle();
})
$('#html').click(function(){
    // document.querySelector('#thing').innerHTML = "<p></p>"
    $('#thing').html("<p>New Html here</p>");
})
$('#text').click(function(){
    $('#thing').text("<p>Change the text</p>");
})
$('#css').click(function(){
    // .css takes a JS Object...Object
    // key is a string for any css property
    // value is want you to apply
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    })
})
$('#add-class').click(function(){
    $('#thing').addClass('btn-danger')
})
$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger')
})

$('#prepend').click(function(){
    $('#thing').prepend('Some prepended text')
})
$('#append').click(function(){
    $('#thing').append('Some appended text')
})
$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500)
})
$('#slide').click(function(){
    $('#thing').slideToggle(2000)
})
$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'yellow',
        'height': '200px',
        'margin-left': '100px'
    },3000)
})