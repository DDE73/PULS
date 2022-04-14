$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        autoplay: true,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/carousel/arrow_left.svg" alt="prev"></button>',
        nextArrow:'<button type="button" class="slick-next"> <img src="img/carousel/arrow_right.svg" alt="next"></button>'
        
    });
  });

//   <img src='img/carousel/arrow_right.svg'></img>