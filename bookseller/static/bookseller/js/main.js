setTimeout(function(){document.querySelector('.banner__local-navigation').classList.remove('preload');},1000); 


var menuButton = $(".nav-menu-button");
var closeButton = $(".close-button");
var nav = $(".banner__local-navigation");
var carousel = $(".carousel");


menuButton.add(closeButton).on('click', function () {
  nav.toggleClass('active')
})

carousel.slick({
  dots: true,
  autoplay: true,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnClick: false,
  autoplaySpeed: 4000,

})







