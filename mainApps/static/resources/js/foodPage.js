// Preventing animation onload
$( document ).ready(function() {
    $(".main-nav").removeClass("preload");
    $("nav").removeClass("preload");
});

// Animation on links
$("a[href^='#'").on('click', function(e){
    e.preventDefault()
    
    const $target = $(this.hash)

    const $currentPosition = $(document).scrollTop()
    const $destination = $target.offset().top
    const $length = Math.abs($currentPosition - $destination)

    let animationDuration = $length/2.6

    if (animationDuration < 900) animationDuration = 900

    console.log($target.offset().top - $(document).scrollTop(), animationDuration)
    
    $('html, body').animate({
        'scrollTop': $target.offset().top - 80 // Padding of section
    }, animationDuration,'swing')
})


// /* FOOD PAGE NAV BAR ON SCROLL */
const $burger = $('.burger')
const waypoint = new Waypoint({
    element: document.getElementById('section-features'),
    handler: function(direction) {
        //console.log(this.element.id + ' Susla ylea ' + this.triggerPoint)
        const $nav = $('nav')
        const $navUl = $('nav .main-nav')

        const $whiteLogo = $('.logo')
        const $blackLogo = $('.black-logo')
        
        $whiteLogo.toggle()
        $blackLogo.toggle()
        $nav.toggleClass('scrolled')
        $burger.toggleClass('scrolled')
        $navUl.toggleClass('scrolled')
    
    },
    offset: '50px'
})


$burger.on('click', () => {
    const $nav = $('.main-nav')
    const $navLinks = $('nav .main-nav li')
    $nav.toggleClass('clicked')
    $burger.toggleClass('clicked')

    // Animate LI
    $navLinks.each( (index, list) => {

        if (list.style.animation){
            list.style.animation = ''
        }else{
            list.style.animation = `navLinkFade 0.6s ease forwards ${index/7 + 0.25}s`
        }
    })
})  


// Detecting resize to change navigation
var $window = $(window);
var $nav = $('nav');
function checkWidth() {
    var windowsize = $window.width();
    if (windowsize <= 500) {
        //if the nav is lower than 550px wide then add class min
        $nav.addClass('min')
    }
}
checkWidth();
$(window).resize(checkWidth);