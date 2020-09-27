(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebar-Close").on("click", function (e) {
    e.stopPropagation();
    $(".side-menu").toggleClass("sidebar-toggled");
    $(".page-wrapper").toggleClass("page-wrapper-toggled");
  });

  $("#page-wrapper").on("click", function () {
    $(".side-menu").removeClass("sidebar-toggled");
    $(".page-wrapper").removeClass("page-wrapper-toggled");
  });

})(jQuery); // End of use strict
