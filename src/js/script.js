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
    //**** VALIDATEеstart validatign Forms by Jqwe
    const validForm =(item)=>{
      $(item).validate({
        rules: {
          name:  {
            required: true,
            minlength: 3
          },
          phone: "required",
          email: {
            required: true,
            email:true
          } 
        },
        messages: {
          name:  {
            required: "Введите имя to contact you",
            minlength: jQuery.validator.format("Нужно не менее {0} символов!")
          },
          phone: {
            required: "Введите телефон",
            phone: "Телефон должен быть в формате +7 999 999 99 99"
          },
          email: {
            required: "Введите эл. адрес",
            email: "Адрес должен быть в формате name@domain.com"
          }
        }
      })

    };
    validForm('#consultation form');
    validForm('#order form');
    validForm('#consultation-form');

    //**** MASK

    // $("#date").mask("99/99/9999");
    $("input[name=phone]").mask("+7 (999) 999-9999");
    // $("#tin").mask("99-9999999");
    // $("#ssn").mask("999-99-9999");

// **** eMAIL, когда форма будет 'SUBMIT' - подтверждаться, производится действие - FUNCTION С ДОП АРГУМЕНТОМ 'e' - event 
// **** e.preventDefault() -отмена стандартного действия браузера по умолчанию, чтобы страница не перезагружалась после отправки формы
    $("form").submit(function(e) {
      e.preventDefault();
      if(!$(this).valid()) {
            return;
        } 
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
    });

    // SMOOTH SCROLL and pageup
    $(window).scroll(function() {
      if ($(this).scrollTop()>1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    }); 
// ***** Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

new WOW().init();

});

