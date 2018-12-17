// add a ready listener to the whole DOM
// if., javascript wait until the DOM is finished loading
// before runnning everything
$(document).ready(()=>{
    console.log("sanity check");

    $('button').click(function(){
        console.log($(this));
        // after method, will get the value of that attribute
        let gridSize = $(this).attr('diff');
        console.log(gridSize);
    })
})