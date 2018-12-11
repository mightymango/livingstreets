window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   Navbar
  var element = document.getElementById("navbar");
  var h = document.getElementById('navbar').clientHeight;
  if (document.body.scrollTop > h || document.documentElement.scrollTop > 0) {
    element.classList.add("solid-navbar")
  } else {
    element.classList.remove("solid-navbar")
  }
  
}

//   Notification
  var notification = document.getElementById("notification")
  if (notification) {
	  var navbar = document.getElementById("navbar")
	  var h = document.getElementById('notification').clientHeight;
	  navbar.style.top = h + "px"
  }

$( document ).ready(function() {
  
  	//Set mobile navbar
	$( "#responsive" ).click(function() {
	  $( "#mobile-navbar" ).slideToggle( "fast")
	});
	
	//Truncate long descriptions
	$( ".more-link" ).on( "click", function() {
	  $(".product-description").removeClass('short-description')
	  $(this).hide();
	});
	
	$( ".stepper" ).on( "click", function() {
		
		var direction = $(this).data('direction')
		var input = $(this).parent().parent().children('input').first()
		var value = parseInt(input.val())
		var minValue = parseInt(input.attr('min'))
		var stepValue = parseInt(input.attr('step'))
		
		if (direction == 'up') {
			value = value + stepValue
		}

		if (direction == 'down') {
			value = value - stepValue
		}
		
		if (value < minValue) {
			value = minValue
		}
		
		input.val(value)
		
		input.trigger("change")

		
	});

	//Carousel stuff
	$("#related-products").flickity({
            cellSelector: ".slider-item",
            resize: true,
            cellAlign: 'center',
            contain: true,
            imagesLoaded: true,
            wrapAround: false,
            adaptiveHeight: true,
            pageDots: true,
            groupCells: false,
            prevNextButtons: true
            })
            
            
	$("#related-products-dots").flickity({
            cellSelector: ".slider-item",
            resize: true,
            cellAlign: 'center',
            contain: true,
            imagesLoaded: true,
            wrapAround: false,
            adaptiveHeight: true,
            pageDots: true,
            groupCells: false,
            prevNextButtons: false
            })

	$("#related-products-no-dots").flickity({
            cellSelector: ".slider-item",
            resize: true,
            cellAlign: 'center',
            contain: true,
            imagesLoaded: true,
            wrapAround: false,
            adaptiveHeight: false,
            pageDots: false,
            groupCells: false,
            prevNextButtons: true
            })
            
	
	$("#sliders-1-slider").flickity({
    cellSelector:    ".slider-item",
    resize:          true,
    cellAlign:       'center',
    contain:         true,
    imagesLoaded:    true,
    wrapAround:      true,
    adaptiveHeight:  true,
    pageDots:        true,
    groupCells:      false,
    prevNextButtons: true,
    autoPlay: 4000,
	pauseAutoPlayOnHover: true
  	})	
  	
  	$("#sliders-1-slider").removeClass('transparent')
  	$("#related-products").removeClass('transparent')
  	$("#related-products-dots").removeClass('transparent')
  	$("#related-products-no-dots").removeClass('transparent')
  		
});



