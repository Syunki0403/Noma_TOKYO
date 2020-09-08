$(function () {
    // スムーススクロール
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    //　バーガーメニュー
    $('.top-nav_burger').on('click', function () {
        $('.top-nav_burger span, .bg-circle, .top-nav_contents_list').toggleClass('show');
    });

    // COMMENTのモーダル
    $('.js-modal-open').on('click',function(){
        $('.comment').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.comment').fadeOut();
        return false;
    });

    // テキストの色を交互に変える
    $('.two-color01').children().addBack().contents().each(function () {
        if (this.nodeType == 3) {
            $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$&</span>"));
        }
    });
    $('.two-color02').children().addBack().contents().each(function () {
        if (this.nodeType == 3) {
            $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$&</span>"));
        }
    });

    // スクロール上でのアニメーション
    $(window).scroll(function () {
        // ドットナビ
        $('section').each(function () {
            var secPosi01 = $('#top').offset().top;
            var secPosi02 = $('#introduction').offset().top;
            var secPosi03 = $('#story').offset().top;
            var secPosi04 = $('#cast').offset().top;
            var secPosi05 = $('#staff').offset().top;
            var secPosi06 = $('#about-noma').offset().top;
            var secPosi07 = $('#theater').offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            $('.dnav li').removeClass('active');
            if (scroll > secPosi01 - windowHeight && scroll < secPosi02) {
                $('.section01').addClass('active');
            } else if (scroll > secPosi02 - windowHeight && scroll < secPosi03) {
                $('.section02').addClass('active');
            } else if (scroll > secPosi03 - windowHeight && scroll < secPosi04) {
                $('.section03').addClass('active');
            } else if (scroll > secPosi04 - windowHeight && scroll < secPosi05) {
                $('.section04').addClass('active');
            } else if (scroll > secPosi05 - windowHeight && scroll < secPosi06) {
                $('.section05').addClass('active');
            } else if (scroll > secPosi06 - windowHeight && scroll < secPosi07) {
                $('.section06').addClass('active');
            } else {
                $('.section07').addClass('active');
            }
        });

        // 飛行機
        $('.js-cast-airplane').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            }
        });
    });

    // 初期画面モーダル
    $(function () {
        jQuery('.iframe').colorbox({
            open: true,
            iframe: true,
            innerWidth: 850,
            innerHeight: 480,
        });
    });
});