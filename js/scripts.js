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
