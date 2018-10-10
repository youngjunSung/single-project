$(function () {
    var slider = $('.slick-test').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 100,
        cssEase: 'linear'
    });
    var tmp_num = 0;
    slider.mouseenter(function () {
        tmp_num++;
        if (tmp_num == 1) {
            $('.slick-slider')
                .slick('slickPlay');
        }
    });
    slider.mouseleave(function () {
        tmp_num--;
        if (tmp_num == 0) {
            $('.slick-slider')
                .slick('slickPause');
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    $('.bxslider').bxSlider({
        mode: 'horizontal',// 가로 방향 수평 슬라이드
        speed: 500,        // 이동 속도를 설정
        pager: false,      // 현재 위치 페이징 표시 여부 설정
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 1920,   // 슬라이드 너비
        minSlides: 4,      // 최소 노출 개수
        maxSlides: 4,      // 최대 노출 개수
        slideMargin: 5,    // 슬라이드간의 간격
        auto: true,        // 자동 실행 여부
        controls: true,
        infiniteLoop: true
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        dotsSpeed: 300,
        navSpeed: 500,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:8
            }
        }
    });


    $('.main-slide').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});