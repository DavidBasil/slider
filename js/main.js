$(document).ready(function(){
	// click on next button
	$('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    if (nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });
	// click on prev button
	$('.prev').on('click', function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		if (prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});

}) // end of main function
