$(document).ready(function() {
  $(".burger-container").on("click", function() {
    $(".burger").toggleClass("burger-x");
    $(".hidden-menu").toggleClass("hide-hidden-menu").toggleClass("show-hidden-menu");
    $("body").toggleClass("hide-scroll-body");
  });
});
