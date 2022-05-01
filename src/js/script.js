$(document).ready(function(){
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
});
