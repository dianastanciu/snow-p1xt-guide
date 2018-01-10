$(document).ready(function() {
  $(".burger-container").on("click", function() {
    $(".hidden-menu").toggleClass("hide-hidden-menu").toggleClass("show-hidden-menu");
    $("body").toggleClass("hide-scroll-body");
  });
});
