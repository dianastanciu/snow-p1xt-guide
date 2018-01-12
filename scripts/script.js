//******** navigation on scroll ********/
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
//******** navigation on scroll ********/

$(document).ready(function() {
  //******** mobile menu ********/
  $(".burger-container").on("click", function() {
    $(".burger").toggleClass("burger-x");
    $(".hidden-menu").toggleClass("hide-hidden-menu").toggleClass("show-hidden-menu");
    $("body").toggleClass("hide-scroll-body");
    
    nav.toggleClass("nav-scrolled");
    burgerLines.css("background", "hsl(0, 0%, 100%)");
    $("#logo").attr("src", "./images/logo-light.svg");
    
    if (nav.hasClass("nav-scrolled")) {
      nav.toggleClass("nav-scrolled");
      burgerLines.css("background", "hsl(0, 0%, 0%)");
    } 
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
  

  //******** BEST PROJECTS ********/
  for (var i = 1; i < 10; i++) {
    //---------mouseenter
    $(".project-item" + i).on("mouseenter", function() {
        $(this).find(".hidden-title, .hidden-subtitle").toggleClass("show-hidden-title-subtitle-r show-hidden-title-subtitle");
    });

    //---------mouseleave
    $(".project-item" + i).on("mouseleave", function() {
        $(this).find(".hidden-title, .hidden-subtitle").toggleClass("show-hidden-title-subtitle show-hidden-title-subtitle-r");
    });
  }
  //******** /BEST PROJECTS ********/


  //******** TESTIMONIALS ********/
  $("#testimonial").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    dots: true
  });

  $("#partners").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 5,
    dots: true, 
    responsive: {
      1000: { items: 5},
      843: {items: 4},
      500: {items: 3},
      0: {items: 2}
    }
  });
  //******** /TESTIMONIALS ********/
});
