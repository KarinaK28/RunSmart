// $(document).ready(function(){
//   $(".carousel__inner").owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true
// }
// );
// });


$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right-arrow.svg"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
});
});