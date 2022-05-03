$(document).ready(function(){

    /**
     * Slider
     */
    $('.carousel__inner').slick({
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: `<button class="slick-prev" type="button"><img src="img/slider/left.png"  alt=""></button>`,
        nextArrow: `<button class="slick-next" type="button"><img src="img/slider/right.png"  alt=""></button>`,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }]
    });

    /**
     * Tabs
     */

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click',(e) => {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }
    toggleSlide('.catalog-item__back');
    toggleSlide('.catalog-item__link');

    /**
     * Modal
      */

    $('[data-modal=consultation]').on('click', () =>{
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', () => {
        $('#consultation, #order, #thanks,.overlay').fadeOut('fast');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    /**
     * Forms validation
     * @param form
     */
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: "Введите своё имя",
                phone: "Введите свой номер телефона",
                email: {
                    required: "Введите свой email",
                    email: "Некоректно введен email"
                }
            }
        });
    }
    validateForms('#order form');
    validateForms('#consultation form');
    validateForms('#consultation-form');

    /**
     * Phone mask
     */

    $('input[name=phone]').mask("(+38099) 999-9999");

    /**
     * Scroll to top
     */
    $(window).scroll(function () {
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn('slow');
        }else{
            $('.pageup').fadeOut('slow');
        }
    });
    $(".pageup").click(function(){
        let _href = $(this).attr('href');
        $("html,body").animate({
            scrollTop: $(_href).offset().top + 'px'
        });
        return false;
    });
    new WOW().init();
});
