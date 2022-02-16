// like function on the product
$('.heart').on('click', function(event) {
	var element = $(this).css('color');
  	if(element == 'rgb(255, 0, 0)'){
    	$(event.currentTarget).css('color', 'black');
  	} else{
  		$(event.currentTarget).css('color', 'red');
  	}
});
