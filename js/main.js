
function main() {
/**** FadeIn ****/


  $(document).ready(function(){
      $(".intro-text").animate({left:40, opacity:"show"}, 1500);
  });

$(document).ready(function(){
          $('.navbar').hide().
          fadeIn(1000, 'swing');
        });



$(document).ready(function() {
    $(window).scroll( function(){


        $('.fadeInBlock').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }
        });

    });
});

/**** FadeIn ****/

// affix the navbar after scroll below header

$('#nav').affix({
    offset: {
      top: $('header').height()
    }
});



//Smooth Scrolling
$(document).ready(function()  {


  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 1000);
            return false;
          }
        }
      });



  	// Portfolio isotope filter
  $(document).ready(function() {
        var $container = $('.isotope-filters');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.iso-nav a').click(function() {
            $('.iso-nav .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
});




}());


}
main();
