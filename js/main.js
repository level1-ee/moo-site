$(document).ready(function() {

	// $('#fullpage').fullpage({
	// 	anchors: ['tere', 'sissejuhatus', 'sisukord', 'fourthPage', 'lastPage'],
	// 	loopHorizontal: false,
	// 	// paddingTop: '150px',,
	// 	scrollingSpeed: 1500,
	// 	// resize:false,
	// 	verticalCentered: false,
	// 	touchSensitivity: 1,
	// 	normalScrollElements: ".comp-rules, .grid-item__label",
	// 	scrollOverflow: true,
	// 	easing: 'easeInOutQuad',
	// 	navigation: true,
	// 	// slidesNavigation: false,
	// 	// autoScrolling: false,


	// 	onLeave: function(index, nextIndex, direction){
	// 				//after leaving section 2
	// 				if(index == '1' && direction =='down'){
	// 						// $('.small-moo-logo').css('opacity', '1');
	// 						$('body').css('background-position', 'center center');
	// 				}

	// 				else if(index == '2' && direction == 'up'){
	// 						$('body').css('background-position', 'top center');
	// 						// $('.small-moo-logo').css('opacity', '0');

	// 				}
	// 		}

	// });


var magnificPopup = $.magnificPopup.instance;
$('.grid-item > a').magnificPopup({
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    // Delay in milliseconds before popup is removed
  removalDelay: 50,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',
  gallery:{
    enabled:true,
    tCounter: ''
  },
  callbacks: {
    open: function() {
      // Will fire when this exact popup is opened
    },
    close: function() {
      // Will fire when popup is closed
      top.document.location.hash = '/';
    },
    change: function() {
      top.document.location.hash = magnificPopup.index;
    }
  }
});



	if (window.location.hash) { // if there is a hash
		var hash = window.location.hash.substring(1);

			$('.grid-item > a').magnificPopup('open', hash);

	}





	var $container = $('.toc-grid');
// initialize
$container.masonry({
	columnWidth: 200,
	itemSelector: '.grid-item'
});

});