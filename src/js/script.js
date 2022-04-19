$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/carousel/arrow_left.svg" alt="prev"></button>',
        nextArrow:'<button type="button" class="slick-next"> <img src="img/carousel/arrow_right.svg" alt="next"></button>',
        responsive: [
          {
            breakpoint: 1091,
            settings: {
              arrows:false,
              dots: true
              
            }
          },

          {
            breakpoint: 768,
            settings: {
              arrows:false,
              dots: true
            
            }
          },

          {
            breakpoint: 576,
            settings: {
              arrows:false,
              dots: true
   
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
    });
  });

