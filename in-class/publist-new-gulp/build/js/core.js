'use strict';

(function () {
  $(document).ready(function () {
    $('.icon-btn-toggler').on('click', function () {
      if (window.innerWidth <= 1080) {
        $('.header nav').slideToggle();
      }
    });
    $(window).on('resize', function () {
      if (window.innerWidth >= 1080) {
        $('.header nav').show();
      }
    });
  });
})();