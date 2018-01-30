             var url = ['images/2017/Group-Photo-2017.jpg', 'images/individual/Bacteria-fragmentation.png','images/a.png'];
            var caption = ['Welcome to the Botelho Lab!', 'ome text that describes me lorem ipsum ipsum lorem','ome text that describes me lorem ipsum ipsum lorem'];
            var index = 0;
            setInterval(function(){
               index = (++index)%3;
               if (index == 0){
               		$('#header2').fadeOut(2000);
               } else if (index == 1){
               		$('#header0').fadeOut(2000);
               } else if (index == 2){
               		$('#header1').fadeOut(2000);
               }
             
               $('.fade ').fadeIn(2000);
         
              	setTimeout(function(){
          		  $('.fade').fadeOut(2000);
                   if (index == 0){
               		$('#header0').fadeIn(2000);
               		$('.fa-circle:eq(0)').css('color', '#25aca8');
	               } else if (index == 1){
	               		$('#header1').fadeIn(2000);
               		$('.fa-circle:eq(1)').css('color', '#25aca8');

	               } else {
	               		$('#header2').fadeIn(2000);
               		$('.fa-circle:eq(2)').css('color', '#25aca8');

	               }
                  $('#main > section.one').css('background-image', 'url('+url[index]+')');
              	},2000);
                
                 
            }, 8000); 