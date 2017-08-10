// smooth scrolling on anchor link clicking

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top 
	}, 700);
	return false
})

$(document).ready(main)