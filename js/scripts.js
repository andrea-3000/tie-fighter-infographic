// $(".main").onepage_scroll({
//    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                     // the browser's width is less than 600, the fallback will kick in.
//    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
// });

$(document).ready(function() {
	$('#fullpage').fullpage();
});

$('.starfield').starscroll(8,3,50,5,4,[255,255,255],true,true,2);

var fv_current = "natural";

	function clickListener(str) {
		$( '.'+str+'-li' ).click( function() {
			var temp = $( this ).attr('id');
			$( '.'+str ).removeClass().addClass(str);
			$( '.'+str ).addClass(str+'-'+temp);
			fv_current = temp;
		});
	}

	clickListener('fv');
	clickListener('rv');
	clickListener('s');

	// $( '.fv-li' ).hover(
	// 	function() {
	// 		var temp = $( this ).attr('id');
	// 		$( '.fv' ).removeClass().addClass('fv');
	// 		$( '.fv' ).addClass('fv-'+ temp);
	// 	},
	// 	function() {
	// 		$( '.fv' ).removeClass().addClass('fv');
	// 		$( '.fv' ).addClass('fv-'+current);
	// 	}
	// );

  $(function () {
      $('#slickQuiz').slickQuiz({
          // options
      });
  });

//   $(function() {
//  $('.menulink').click(function(){
//    $("#bg").attr('src',"img/picture1.jpg");
//    return false;
//  });
// });

  /*
  when the li is clicked, set the current to the name of the class
  remove the classes from i fv
  add the current class
  */
