$('.toggle-button').on('click', function(e) {
    $('.fixed-header').toggleClass("mobile-open"); //you can list several class names 
    e.preventDefault();
  });

//    // testimoniak-slick
$('.testimonial-slick').slick({
    dots: false,
    arrows: true,
         infinite: true,
         autoplay: false,
         prevArrow: $('#btn-left'),
         nextArrow: $('#btn-right'),
         slidesToShow: 1,
         slidesToScroll: 1
     
  });
// // testimoniak-slick end
