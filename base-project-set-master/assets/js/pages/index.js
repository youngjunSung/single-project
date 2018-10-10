$(function () {
    new Swiper('.swiper-main', {
        slidesPerView: 7.8,
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    new Swiper('.swiper-sub', {
        slidesPerView: 3,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});