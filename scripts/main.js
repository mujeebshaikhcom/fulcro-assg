var app = {
  init: function() {
    app.mobileMenu();
  },
  mobileMenu : function() {
    const navLinks = $('.nav-wrapper>ul');
    const links = $('.nav-wrapper>ul>li');
  
    $('.hamburger').on('click', function(){
        $(navLinks).toggleClass('open');
        $(this).toggleClass('close');
        $(links).each(function(){
            $(this).toggleClass('fade');
        });
    });
    $(links).on('click', function(){
        if($(window).width() < 768) {
            $('.hamburger').click();
        }
    });
  }
}

// small carousel
function defer(method) {
    if (window.jQuery)
      method();
    else
      setTimeout(function() {
        defer(method)
      }, 50);
  }
  defer(function() {
    (function($) {
      
      function doneResizing() {
        var totalScroll = $('.resource-slider-frame').scrollLeft();
        var itemWidth = $('.resource-slider-item').width();
        var difference = totalScroll % itemWidth;
        if ( difference !== 0 ) {
          $('.resource-slider-frame').animate({
            scrollLeft: '-=' + difference
          }, 500, function() {
            // check arrows
            checkArrows();
          });
        }
      }
      
      function checkArrows() {
        var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
        var frameWidth = $('.resource-slider-frame').width();
        var itemWidth = $('.resource-slider-item').width();
        var totalScroll = $('.resource-slider-frame').scrollLeft();
        
        if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
          $(".next").css("visibility", "visible"); //change to hidden for end arrow hidden
        }
        else {
          $(".next").css("visibility", "visible");
        }
        if ( totalScroll < itemWidth ) {
          $(".prev").css("visibility", "visible"); //change to hidden for start arrow hidden
        }
        else {
          $(".prev").css("visibility", "visible");
        }
      }
      
      $('.arrow').on('click', function() {
        var $this = $(this),
          width = $('.resource-slider-item').width(),
          speed = 500;
        if ($this.hasClass('prev')) {
          $('.resource-slider-frame').animate({
            scrollLeft: '-=' + width
          }, speed, function() {
            // check arrows
            checkArrows();
          });
        } else if ($this.hasClass('next')) {
          $('.resource-slider-frame').animate({
            scrollLeft: '+=' + width
          }, speed, function() {
            // check arrows
            checkArrows();
          });
        }
      }); // end on arrow click
      
      $(window).on("load resize", function() {
        checkArrows();
        $('#resource-slider .resource-slider-item').each(function(i) {
          var $this = $(this),
            left = $this.width() * i;
          $this.css({
            left: left
          })
        }); // end each
      }); // end window resize/load
      
      var resizeId;
      $(window).resize(function() {
          clearTimeout(resizeId);
          resizeId = setTimeout(doneResizing, 500);
      });
      
    })(jQuery); // end function
  });

  var lastScrollTop = 1;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('header').addClass('headeropaq');
    } else {
        $('header').removeClass('headeropaq');
    }
    });


$(document).ready(function(){
  app.init();
});
$(window).on('load',function(){
  // PAGE IS FULLY LOADED  
  // FADE OUT YOUR OVERLAYING DIV
  $('#overlay').fadeOut();
});