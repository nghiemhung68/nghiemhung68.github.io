/* Theme Name: Aparax - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/


   
// ----- STICKY ----- //
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 40) {
                    $(".navbar-sticky").addClass("darkheader");
                } else {
                    $(".navbar-sticky").removeClass("darkheader");
                }
            });
      
// ----- SCROLLMENU ----- //
            $('.navigation-menu a').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        
// ----- OWL-CAROUSEL ----- //
            $("#owl-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
          

            itemsDesktop : [1024, 2],
            itemsDesktopSmall : [768, 1],
            itemsTablet: [568, 1]

            });
     
// ----- MAIN-MENU ----- //

            var scroll = $(window).scrollTop();

            $('.navbar-toggle').on('click', function(event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });

            $('.navigation-menu>li').slice(-2).addClass('last-elements');

            $('.menu-arrow,.submenu-arrow').on('click', function(e) {
                if ($(window).width() < 992) {
                    e.preventDefault();
                    $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
                }
            });
   
// ----- SCROLLSPY ----- //
            $("#navigation").scrollspy({
                offset: 50
            });
       
// ----- VIDEO-MAGNIFICPOPUP ----- //
            $('.video-play-icon').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        

// ----- VIDEO-MAGNIFICPOPUP ----- //
$('.video-play-icon-trigger').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});


// ----- MFP ----- //
$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

// Contact Form
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
      fadeIn();
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
      fadeIn();
      return false;
    }
    if (comments == "" || comments == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
      fadeIn();
      return false;
    }
  
    document.getElementById("simple-msg").innerHTML = "<div class='alert alert-success'>Message Submitted!</div>";
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#comments').val('');
    return false;
  }
  
  function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.5;
        fade.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 200);
  }