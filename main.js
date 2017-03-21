function matchHeights(el, cssEl, resized){

		if(resized){ cssEl.css("height", "auto");	}

  	var	totalHeight = 0;
  	//set banners equal height
		el.each(function(){
			var el = $(this).outerHeight(true);
			if(el >= totalHeight ){
				totalHeight = el;
			}
		});
		
		cssEl.css("height", totalHeight);	

	}

$( document ).ready(function() {

	matchHeights($("#id .class"), $("#id .class"), false);

});

$( window ).resize(function() {

	matchHeights($("#id .class"), $("#id .class"), true);

});
