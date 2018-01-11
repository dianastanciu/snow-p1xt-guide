const nav = $(".navigation");
const burgerLines = $(".header .container .navigation .burger-container .burger > div");
const navLinks = $(".header > .container > .navigation > .links > .link > a");
const winWidth = $(window).width();
if (winWidth <= 767) {
    $(window).scroll(function() {
        if ($(this).scrollTop()>180) {
            nav.addClass("nav-scrolled");
            burgerLines.css("background", "hsl(0, 0%, 0%)");
            $("#logo").attr("src", "./images/logo-dark.svg");
          } else {
            nav.removeClass("nav-scrolled");
            burgerLines.css("background", "hsl(0, 0%, 100%)");
            $("#logo").attr("src", "./images/logo-light.svg");
          }
    });
} else if (winWidth >= 768) {
    $(window).scroll(function() {
        if ($(this).scrollTop()>65) {
            nav.addClass("nav-scrolled");
            navLinks.css("color", "hsl(0, 0%, 0%)");
            $("#logo").attr("src", "./images/logo-dark.svg");
        } else {
            nav.removeClass("nav-scrolled");
            navLinks.css("color", "hsl(0, 0%, 100%)");
            $("#logo").attr("src", "./images/logo-light.svg");
        }
    });
}


$(document).ready(function() {
  //******** mobile menu ********/
  $(".burger-container").on("click", function() {
    $(".burger").toggleClass("burger-x");
    $(".hidden-menu").toggleClass("hide-hidden-menu").toggleClass("show-hidden-menu");
    $("body").toggleClass("hide-scroll-body");
  });
  //******** /mobile menu ********/


  //******** smooth scrolling ********/
    // handle links with @href started with '#' only
      $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
      var id = $(this).attr('href');

    // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

    // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

    // top position relative to the document
      var pos = $id.offset().top;

    // animated top scrolling
      $('body, html').animate({scrollTop: pos});
    });
  //******** /smooth scrolling ********/
});
