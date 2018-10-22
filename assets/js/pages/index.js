$(document).ready(function () {
    $(window).resize(function () {
        var winWidth = $(document).width(),
            winWidth2 = window.innerWidth,
            winWidth3 = window.outerWidth,
            winHeight = $(window).height();
        // Header control
        if (winWidth2 >= 990) {
            $('.menu-toggle, .toc-list, .bg-mo').removeClass('active');
        }
    });

    // Header control
    $('.bg-mo').click(function () {
        $('.menu-toggle, .toc-list, .bg-mo').removeClass('active');
    });
    $('.toggle-btn-pc').click(function () {
       $(this).toggleClass('active');
       $('.toc-list, .content-wrap').toggleClass('pc-hidden');
    });

    // 첫 로드 시 content 제어
    $('.content-inner').not('[data-name="Component Recycle"]').hide();

    // content 이동
    $('.toc-menu p').click(function () {
       var $date_name = $(this).text();
       $('.content-inner').hide();
       $('.content-inner[data-name="'+$date_name+'"]').fadeIn();
       $('.menu-toggle, .toc-list, .bg-mo').removeClass('active');
       $(window).scrollTop(0);
    });
});