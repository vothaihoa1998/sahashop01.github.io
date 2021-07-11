// Scrollspy
var spy = new Gumshoe('nav a');

//slick
// $(document).ready(function(){
// $('.product-wrapper').slick({
//   mobileFirst: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   pauseOnDotsHover:true,
//   autoplaySpeed:1000,
//   dots: true,
//   arrows: false,
//   infinite: true
// });
// });
// Burger
    $('.burger').on('click', function (event) {
        $('.navigation-bar').slideToggle('200');
        $('.toggle-open').toggleClass('open');
        $('.toggle-close').toggleClass('close');
    })

// Sticky navbar
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});
});
// Scroll to TOP
var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 1500,
        reset: true
    });
    ScrollReveal().reveal('.col, .aboutus-img, .img-col', { origin: 'left' });
    ScrollReveal().reveal('.aboutus-content, .home-image', { origin: 'right' });
    ScrollReveal().reveal('.product-item, .brand-wrapper, .newsletter-wrapper', { interval: 100 });
   

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

