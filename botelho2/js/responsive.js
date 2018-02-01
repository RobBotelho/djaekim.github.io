               $('.motive').click(function() {
                   if ($(this).next().css('display', 'none')) {
                       $(this).next().slideDown(1000);
                       $('html,body').animate({
                               scrollTop: $(this).offset().top
                           },
                           250);

                   }
               });
               $('.fa-times').click(function() {
                   $(this).parent().slideUp(250);
               });
               $('.topic, .crew-topic, .topic-media').click(function() {
                   var Top = $(this);

                   if ($(this).next().is(':visible')) {

                       $(this).next().slideUp();

                   } else {
                       $(this).next().slideDown();
                       setTimeout(function() {
                           $('html,body').animate({
                                   scrollTop: Top.offset().top
                               },
                               250);
                       }, 300)
                   }

                   $('.topic, .crew-topic').not(this).each(function() {
                       $(this).next().slideUp();

                   });




               })
               $('.button').click(function() {
                   $('.portfolio').slideDown();
               });
               $('.fa-chevron-circle-down').click(function() {
                   $("body").css("overflow", "scroll");

                   $('.portfolio').slideUp();
               });
