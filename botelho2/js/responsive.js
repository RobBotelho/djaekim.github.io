   $('.motive').click(function(){
                        if ($(this).next().css('display', 'none')){
                           $(this).next().slideDown(1000); 
                           $('html,body').animate({
                            scrollTop: $(this).offset().top},
                          500);
                        
                        } 
                        });
                        $('.fa-times').click(function(){
                        $(this).parent().slideUp(1000);
                        });
                        $('.topic, .crew-topic, .topic-media').click(function(){
                           var top = $(this);
                          /// if (top.next().css('display') == 'none'){
                           		console.log('here')
                           		 $('html,body').animate({
	                              scrollTop: top.offset().top},
	                             500);
	                           

	                           
	                          
	                       	    $(this).next().slideDown();
                      //     } 
                         
	                          
                          
                        })
                        $('.button').click(function(){
                           $('.portfolio').slideDown();
                        });
                        $('.fa-chevron-circle-down').click(function(){
                             $("body").css("overflow", "scroll");
               
                           $('.portfolio').slideUp();
                        });
               