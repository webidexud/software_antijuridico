$(window).on('load', function(){


	

	// select no of li
	var noOfLi	=	$('.list').length; // Total no of li
	var showNo 	=  $('.show-row select').val()
	$('.show-row select').on('change', function(e){
		showNo 	=	$(this).val();
		myRemoveClass();		
	});


	

	//select function
	function myRemoveClass() {
		//Pagination		
		var showNoOfLi	=	showNo,  //  Show now of li
			showPage	=	Math.ceil(noOfLi/showNo), // pagination list
			counter,
			no 			=	0,
			start		=	no,
			end			=	showNoOfLi;

		$('.pagination').empty()
		for(counter = 1; counter <= showPage; counter++){
		 	$('<li><a href="javascript:void(0)" data-lt="'+counter+'">'+ counter +'</a></li>').appendTo('.pagination');
		 	$('.pagination li').eq(0).addClass('active');
		 }	
		$('#persons tbody tr').removeClass('active-item').hide()
		$('#persons tbody tr').slice(start, end).show().addClass('active-item');

		$('.prev').prop('disabled', true).parent('li').addClass('disabled');
		$('.next').prop('disabled', false).parent('li').removeClass('disabled');

		// click on pagination
		function myfunction(controller) {
			return function () {
				if (controller == 'nextPagination') {
					no++;
					$('.pagination li').removeClass('active')
					$('.pagination li').eq(no).addClass('active');
					start1 = showNoOfLi*no;					
					end1 = showNoOfLi*(no+1);
					$('#persons tbody tr').removeClass('active-item').hide();
					$('#persons tbody tr').slice(start1, end1).show().addClass('active-item');
					$('.prev').prop('disabled', false).parent('li').removeClass('disabled');
					if(end1 >= noOfLi){					
						$('.next').prop('disabled', true).parent('li').addClass('disabled');		
					}
				}
				else if(controller == 'prevPagination') {
					no--;
					$('.pagination li').removeClass('active')
					$('.pagination li').eq(no).addClass('active');
					start1 = showNoOfLi*no;					
					end1 = showNoOfLi*(no+1);
					$('#persons tbody tr').removeClass('active-item').hide();
					$('#persons tbody tr').slice(start1, end1).show().addClass('active-item');
					$('.next').prop('disabled', false).parent('li').removeClass('disabled');
					
					if(no === 0){					
						$('.prev').prop('disabled', true).parent('li').addClass('disabled');		
					}
				}
				else if(controller == 'dots') {
					$('.pagination li').removeClass('active');
					var thisIndex = $(this).addClass('active').index();
					no = thisIndex;
					start1 = showNoOfLi*no;					
					end1 = showNoOfLi*(no+1);
					$('#persons tbody tr').removeClass('active-item').hide();
					$('#persons tbody tr').slice(start1, end1).show().addClass('active-item');

					if(no > 0){
						$('.prev').prop('disabled', false).parent('li').removeClass('disabled');
					}else{
						$('.prev').prop('disabled', true).parent('li').addClass('disabled');
					}					
					if(end1 >= noOfLi){	
									
						$('.next').prop('disabled', true).parent('li').addClass('disabled');		
					}else{
						$('.next').prop('disabled', false).parent('li').removeClass('disabled');
					}
				}
			}
		}

		$('.wrapper').on('click','.next', myfunction('nextPagination'));
		$('.wrapper').on('click','.prev', myfunction('prevPagination'));
		$('.wrapper').on('click','.pagination li', myfunction('dots'));

	}

	

	myRemoveClass()



	
	
	//live search box
	$('.search-row input').on('keyup', function() {
		var value = $(this).val();
		var patt = new RegExp(value, "i");
		console.log(patt)
		$('#persons').find('.active-item').each(function() {
			if (!($(this).find('td').text().search(patt) >= 0)) {
				$(this).not('.myHead').hide();
			}
			if (($(this).find('td').text().search(patt) >= 0)) {
				$(this).show();
			}

		});
	});


	
	
})
