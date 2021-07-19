$(function () {

    // aimation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 100) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');

});



// イベントと関数を紐付け
document.addEventListener('touchmove', disableScroll, { passive: false });


(function ($) {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var $scroll = $('.scroll_ctrl');
    var open = 'open'; // class
    var scroll_lock = 'scroll_lock'; //class
    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
            $scroll.addClass(scroll_lock);
            document.addEventListener('touchmove', disableScroll, { passive: false });
        } else {
            $nav.removeClass(open);
            $scroll.removeClass(scroll_lock);
            document.removeEventListener('touchmove', disableScroll, { passive: false });
        }
    });
    // mask close
    $mask.on('click', function () {
        $nav.removeClass(open);
        $scroll.removeClass(scroll_lock);
    });
})(jQuery);

function disableScroll(event) {
    event.preventDefault();
}
