$(document).scroll(function() {
  if ($(window).scrollTop()===0) {
    if (window.location['pathname'] == '/index.html' && window.location['pathname'] == '/' && window.location['pathname'] == '') {
      nav.removeClass("nav-scrolled");
      logoColor("light");
    }
  } 
})

$(document).ready(function() {
  // **************************** //
  // navigation styles on scroll //
  // ************************* //
  let winWidth = $(window).width();
  let nav = $(".navigation");

  let logoColor = function(e) {
    $("#logo").attr("src", "./images/logo-" + e + ".svg");  
  };
  let enableAnimation = function(em) {
      em.removeClass("disableAnimation");
  };


  if (winWidth <= 767) {
      $(window).scroll(function() {
          if ($(this).scrollTop()>100) {
              nav.addClass("nav-scrolled");
              logoColor("dark");
            } else {
              nav.removeClass("nav-scrolled");
              logoColor("light");
            }
      });
  } else if (winWidth >= 768) {
      $(window).scroll(function() {
          if ($(this).scrollTop()>10) {
              nav.addClass("nav-scrolled");
              logoColor("dark");
          } else {
            //if on homepage, make the text black. else make it white -- for pages with white background everywhere
              if (window.location['pathname'] == '/index.html' && window.location['pathname'] == '/' && window.location['pathname'] == '') {
                nav.removeClass("nav-scrolled");
                logoColor("light");
              } else {
                nav.removeClass("nav-scrolled");
                logoColor("dark");
              } 
          }


      });
  }

  // **************************** //
  // ******* mobile menu ******* //
  // ************************* //
  $(".burger-container").on("click", function() {
    $(".burger").toggleClass("burger-x");
    $(".hidden-menu").toggleClass("hide-hidden-menu").toggleClass("show-hidden-menu");
    $("body").toggleClass("hide-scroll-body");
    
    nav.toggleClass("nav-scrolled");
    logoColor("light");
    
    if (nav.hasClass("nav-scrolled")) {
      nav.toggleClass("nav-scrolled");
    } 
  });

  // **************************** //
  // ****** smooth scroll ****** //
  // ************************* //
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

  // **************************** //
  // *portfolio projects hover* //
  // ************************* //
  for (var i = 1; i < 10; i++) {
    $(".project-item" + i).on("mouseenter", function() {
      $(this).find(".hidden-title, .hidden-subtitle").toggleClass("show-hidden-title-subtitle-r show-hidden-title-subtitle");
    });

    $(".project-item" + i).on("mouseleave", function() {
      $(this).find(".hidden-title, .hidden-subtitle").toggleClass("show-hidden-title-subtitle show-hidden-title-subtitle-r");
    });
  }

  // **************************** //
  // ******** carousels ******** //
  // ************************* //
  $("#testimonial").owlCarousel({
    loop:true,
    margin:10,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1100,
  });

  $("#partners").owlCarousel({
    loop:true,
    margin:10,
    items: 5,
    dots: false,
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
    dots: false,
    nav: true, 
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true' style='font-size: 17px;'></i>", "<i class='fa fa-arrow-right' aria-hidden='true' style='font-size: 17px;'></i>"],
    responsive: {
      1600: {items: 4},
      1200: {items: 3},
      900: {items: 2},
      0: {items: 1}
    }
  });
    
  // **************************** //
  // **** logo color & href **** //
  // ************************* //
  if (window.location['pathname'] == '/index.html' || window.location['pathname'] == '/' || window.location['pathname'] == '') {
    logoColor("light");
    $("#linkClick").attr("href", "#header"); //scroll to top header when clicking on the logo
  } else if (window.location['pathname'] !== '/index.html' || window.location['pathname'] !== '/' || window.location['pathname'] !== ''){
    logoColor("dark");
  }

  // **************************** //
  // **** load more button **** //
  // ************************* //
  $("#load-more").on("click", function(){
    alert("Sorry, I have yet to learn how to do this!");
  });

  // **************************** //
  // **** page menu button **** //
  // ************************* //
  $(".page-menu").on("click", function() {
    enableAnimation($(".projects-portfolio"));
    $(".projects-portfolio").toggleClass("slideDownContent");
    $(".hidden-page-menu").toggleClass("showPageMenu");
    $(".item").toggleClass("cascade1");
  });
});
