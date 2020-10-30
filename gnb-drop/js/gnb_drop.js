var gnbdrop = {
  init: function () {
    this.navAction_drop();
  },
  navAction_drop: function () {
    var nav_bg = $('.gnbdrop__bg');
    var nav_link = $('.header .depth .depth01').children('a');
    var nav_drop = $('.header .depth .depth02_box');

    $('.gnbdrop--all').each(function () {
      var maxHeight = 0;
      $(this)
        .find('.depth .depth02_box')
        .each(function () {
          if ($(this).outerHeight() > maxHeight) {
            maxHeight = $(this).outerHeight();
          }
        });
      $(nav_bg).height(maxHeight);

      $(this)
        .find(nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            $(nav_bg).stop().slideDown(200);
            $(nav_drop).stop().slideDown(200);
          });
        });
      $(this).on('mouseleave', function () {
        $(nav_drop).stop().slideUp(200);
        $(nav_bg).stop().slideUp(200);
      });
    });

    $('.gnbdrop--line').each(function () {
      $(this)
        .find(nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $(nav_drop).stop().hide();
              $(nav_bg).stop().show();
              $(this).next().stop().show();
            } else {
              $(nav_drop).stop().hide();
              $(nav_bg).stop().hide();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $(nav_drop).stop().hide();
        $(nav_bg).stop().hide();
      });
    });

    $('.gnbdrop--box').each(function () {
      // if ($(window).width() > 1024) {
      $(this)
        .find(nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $(nav_drop).stop().slideUp();
              $(this).next().stop().slideDown();
            } else {
              $(nav_drop).stop().slideUp();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $(nav_drop).stop().slideUp();
      });
    });
  },
};
gnbdrop.init();
