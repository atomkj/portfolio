

//슬릭구현
$(document).ready(function(){
     //wow
    new WOW().init();
    
    //
    $('.slider').on('init', function(event, slick) {
    $(this).append('<div class="slideCount"><span class="current"></span> / <span class="total"></span></div>');
        
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
      })
      .slick({
        dots:false,
        arrows:true,
        autoplay:true,
        autoplaySpeed:8000,
        slidesToShow:1,
        prevArrow:$('.prev'),
        nextArrow:$('.next'),
        pauseOnHover:false,
      })
      .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
      });

    setTimeout(function(){
        $('#loading').fadeOut(1000);
    },5000);

   
})

