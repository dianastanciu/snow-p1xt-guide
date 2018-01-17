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
          //if it's NOT on homepage, make the text black. else make it white -- for pages with white background everywhere
            if (window.location['pathname'] !== '/index.html' && window.location['pathname'] !== '/') {
              nav.removeClass("nav-scrolled");
              navLinks.css("color", "hsl(0, 0%, 0%)");
              $("#logo").attr("src", "./images/logo-dark.svg");
            } else {
              nav.removeClass("nav-scrolled");
              navLinks.css("color", "hsl(0, 0%, 100%)");
              $("#logo").attr("src", "./images/logo-light.svg");
            } 
        }
    });
}
//******** /navigation on scroll ********/

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


  //******** carousels ********/
  $("#testimonial").owlCarousel({
    loop:true,
    margin:10,
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true' style='font-size: 17px;'></i>", "<i class='fa fa-arrow-right' aria-hidden='true' style='font-size: 17px;'></i>"]
  });


  $("#partners").owlCarousel({
    loop:true,
    margin:10,
    items: 5,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      1000: { items: 5},
      843: {items: 3},
      550: {items: 2},
      0: {items: 1}
    }
  });

  $("#blog").owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    nav: true, 
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true' style='font-size: 17px;'></i>", "<i class='fa fa-arrow-right' aria-hidden='true' style='font-size: 17px;'></i>"],
    responsive: {
      1600: {items: 4},
      1200: {items: 3},
      900: {items: 2},
      0: {items: 1}
    }
  });
  //******** /carousels ********/
  
  //if on homepage, scroll to top header when clicking on the logo
  if (window.location['pathname'] == '/index.html' || window.location['pathname'] == '/') {
    $("#linkClick").attr("href", "#header");
  } 

  //logo change
  //--if NOT on homepage, change navigation logo to dark logo
  if (window.location['pathname'] !== '/index.html' && window.location['pathname'] !== '/') {
    $("#logo").attr("src", "./images/logo-dark.svg");
  }




  ///// PORTFOLIO PAGE 
  //--on click show alert
  $("#load-more").on("click", function(){
    alert("Sorry, I have yet to learn how to do this!");
  });

  //on click page menu
  $(".page-menu").on("click", function() {
    const enableAnimation = function (element) {
      element.removeClass("disableAnimation");
    };
    enableAnimation($(".projects-portfolio"));
    $(".projects-portfolio").toggleClass("slideDownContent");
    $(".hidden-page-menu").toggleClass("showPageMenu");
    $(".item").toggleClass("cascade1");
  });
  ///// /PORTFOLIO PAGE



});
