
   //  Sticky header Menu

$(window).scroll(function () {

  // header bg color 

	if ($(document).scrollTop() > 50) {
		$("header").css("background", "#fff");
	} else {
		$("header").css("background", "transparent");
	}

  //  header logo 

	if ($(this).scrollTop() > 50) {
		$('.navbar-brand img').attr('src', 'assets/img/dark-logo.png');
	} else {
		$('.navbar-brand img').attr('src', 'assets/img/white-logo.png');
	}

	// header bg color 
	if ($(document).scrollTop() > 50) {
		$("header .nav-link").css("color", "#333");
	} else {
		$("header .nav-link").css("color", "#fff");
	}



});



///owl carousel start here //
$('#owl-carousel-one').owlCarousel({
	loop: true,
	margin: 20,
	touchDrag: true,
	mouseDrag: true,
	items: 4,
	smartSpeed: 1000,
	autoplay: true,
	autoplayTimeout: 2000
})
$('#client-review-slider').owlCarousel({
	loop: true,
	margin: 20,
	touchDrag: true,
	mouseDrag: true,
	items: 3,
	smartSpeed: 1000,
	autoplay: true,
	autoplayTimeout: 4000
})



// faq sec   accordian 
var acc = document.getElementsByClassName("mk-acc-btn");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
// faq sec   accordian end



// parallax scroll 
$(window).scroll(function () {
	$(".consult-sec").css("background-position", "70% " + ($(this).scrollTop() / 5) + "px");
});
// parallax scroll  end