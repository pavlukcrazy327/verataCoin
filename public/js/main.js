$(document).ready(function() {
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-nav shadow-sm');
        } else {
            $('.fixed-top').removeClass('bg-nav shadow-sm');
        }
    });   


  })
