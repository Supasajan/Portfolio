// This adds a listener for when the page is ready, and then runs the script in the function below
$(document).ready(function () {

	// Here we're assigning our buttons to the variables "back" and "forward"
var back = $('.backbutton'),
    forward = $('.forwardbutton'),
    menuButton = $('.sidebar-action'),
    touchdown = false;

    menuButton.click(function (){
      if ($('body').hasClass('_sidebar-active')){
          $('body').removeClass('_sidebar-active');
      } else {
        $('body').addClass('_sidebar-active');

      }
      
    });
// And here we're assigning the wrapper to the varaible "wrap"
var wrap = $('#montage-wrap');
  // This is where all of our javascript it going to go
  // This adds an event listener for mouse down
forward.mousedown(function () {
  	touchdown = true;
  	// This returns the current scroll left position of your wrapper
  	scrollLeftAnimated();
});

function scrollLeftAnimated() {

	// This returns the current scroll left position of your wrapper
  	if (touchdown) {
  		var scrollLeft = wrap.scrollLeft();

  		// This sets the scroll left to be a little further along
  		wrap.stop(true, true).animate({scrollLeft : (scrollLeft + 200)}, 300);

  		setTimeout(function() { scrollLeftAnimated(); }, 400);
	}

}

forward.mouseup(function () {
	touchdown = false;
});


back.mousedown(function () {
	touchdown= true;
 	scrollRightAnimated();
});


function scrollRightAnimated() {
	// This returns the current scroll left position of your wrapper
	if (touchdown) {
  		var scrollLeft = wrap.scrollLeft();

  		// This sets the scroll left to be a little further along
  		wrap.stop(true, true).animate({scrollLeft : (scrollLeft - 200)}, 300);
 		setTimeout(function() { scrollRightAnimated(); }, 400);
	}
}

back.mouseup(function () {
	touchdown = false;
});


});