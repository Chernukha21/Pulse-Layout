$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev" type="button"><img src="img/slider/left.png"  alt=""></button>`,
        nextArrow: `<button class="slick-next" type="button"><img src="img/slider/right.png"  alt=""></button>`,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});