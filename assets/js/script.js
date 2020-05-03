// Make nav background white instead of transparent after scrolling
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


$(document).ready(function () {
    // Update nav to show where you are (not working rn)

    // var url = window.location;
    // $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    // $('ul.nav a').filter(function() {
    //      return this.href == url;
    // }).parent().addClass('active');

    $("#Iris").hover(function(){
        alert("You entered p1!");
      },
      function(){
        alert("Bye! You now leave p1!");
      });
    $("#Courtnie").hover(function(){
    alert("Courtnie");
    },
    function(){
    alert("Bye Courtnie");
    });
});

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('#navbarNav a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#navbarNav a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#navbarNav ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
