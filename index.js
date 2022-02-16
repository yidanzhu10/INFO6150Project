// like function on the product
$('.heart').on('click', function(event) {
	var element = $(this).css('color');
  	if(element == '#FF0000'){
    	$(event.currentTarget).css('color', 'black');
  	} else{
  		$(event.currentTarget).css('color', 'red');
  	}
});

// Product quantity add and minus

$(.plus-btn).on('click', function(event) {
	// event.preventDefault();
	var $input = $(this).closest('div').find('input');
	var value = parseInt($input.val());
	if(value >= 0) {
		value += 1;
	} else {
		value = 0;
	}
	$input.val(value);
})
