// smooth scrolling on anchor link clicking

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top 
	}, 700);
	return false
})

$(function() {
	$("#nav").hover(function() {
		$(this).animate({right: '0px'},
			{queue: false, duration: 500});
	}, function() {
		$(this).animate({right:'-100px'},
			{queue: false, duration: 500});
	});
});

if( $(window).width() > 750 ) {
    $(function() {
		$("#develop").hover(function() {
			$(this).animate({right: '10%'},
				{queue: false, duration: 500});
		}, function() {
			$(this).animate({right:'50%'},
				{queue: false, duration: 500});
		});
	});
}

$(window).resize(function() {
    if( $(window).width() > 750 ) {
        $(function() {
			$("#develop").hover(function() {
				$(this).animate({right: '10%'},
					{queue: false, duration: 500});
			}, function() {
				$(this).animate({right:'50%'},
					{queue: false, duration: 500});
			});
		});
    }
});

if( $(window).width() > 750 ) {
		$(function() {
			$("#design").hover(function() {
				$(this).animate({left: '10%'},
					{queue: false, duration: 500});
			}, function() {
				$(this).animate({left:'50%'},
					{queue: false, duration: 500});
			});
		});
    }


$(window).resize(function() {
    if( $(window).width() > 750 ) {
		$(function() {
			$("#design").hover(function() {
				$(this).animate({left: '10%'},
					{queue: false, duration: 500});
			}, function() {
				$(this).animate({left:'50%'},
					{queue: false, duration: 500});
			});
		});
    }	
});

/*if( $(window).width() > 750 ) {

	$('#design').hover(function(){
	    $('#design .description').css({"display":"inline-block"});
	},function(){
	    $('#design .description').css({"display":"none"});

	});

}*/


$(document).scroll(function() {
	$('#nav').toggle($(this).scrollTop()>600);
});

$(document).ready(main)