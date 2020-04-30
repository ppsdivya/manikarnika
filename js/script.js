$( document ).ready(function() {
    $('.gallery-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 3
      });
      $('.testimonial-box').flexslider({
        animation: "fade",
        controlNav: false,
      });

      var stickyOffset = $('#header').offset().top;

      $(window).scroll(function(){
        
        var sticky = $('#header'),
            scroll = $(window).scrollTop();
          
        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

});