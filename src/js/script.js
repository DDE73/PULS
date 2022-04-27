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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // script to swich between сard and its content
    const swich = (item) => {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  
  swich ('.catalog-item__link');
  swich ('.catalog-item__back');
    // script to swich between сard and its content

    // Modal window
    $('[data-modal=consultation').on('click',function(){
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click',function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('fast');      
    });
    $('.button_mini').each(function(i){
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });
    // VALIDATE
    $('#consultation-form').validate();
    $('#consultation form').validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email:true
        } 
      }
    });
    $('#order form').validate();
 
  });

