jQuery(document).ready(function(){

	// CAROUSEL
	var $ = jQuery;
	var $carousel = $('#top-carousel');
	if($carousel.find('.carousel-inner > .item').size() <= 1) {
		$carousel.find('.carousel-control').remove();
		$carousel.find('.carousel-indicators').remove();
	}

	$carousel.find('.carousel-inner > .item').each(function(i) {
		(i === 0) ? $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"' class='active'></li>") : $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"'></li>");
		var src = $(this).find('img').attr('src');
		if(src) {
			$(this).css('background','url('+src+')');
		}
	});
	$carousel.find('.carousel-inner > .item').first().addClass('active');

	// DATE AND TIME
	Date.prototype.monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
	Date.prototype.getMonthName = function() {
		return this.monthNames[this.getMonth()];
	};
	var d = new Date();
	$('#header-now').text( weekday[d.getDay()] + ', ' + d.getMonthName() + ' ' + d.getDate()  + ', ' + d.getFullYear() );
});

$(window).on('load', function() {
	var colorThief = new ColorThief();
	$('.color-source').each(function() {
		let that = $(this);
		let color = colorThief.getColor($(this)[0]);
		that.closest('.item').find('.foreground').css('background-color', 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.6)');
	});
});