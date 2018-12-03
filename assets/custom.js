window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   Navbar
  var element = document.getElementById("navbar");
  var h = document.getElementById('navbar').clientHeight;
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
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
  
	$( "#responsive" ).click(function() {
	  $( "#mobile-navbar" ).slideToggle( "fast")
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

		
	});
	
  
	
	
});
