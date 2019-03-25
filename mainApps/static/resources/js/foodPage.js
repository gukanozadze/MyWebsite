// Preventing animation onload
$( document ).ready(function() {
    $(".main-nav").removeClass("preload");
    $("nav").removeClass("preload");
});

$("a[href^='#'").on('click', function(e){
    e.preventDefault()
    var $target = $(this.hash)

    $('html, body').animate({
        'scrollTop': $target.offset().top - 80 // Padding of section
    }, 1000,'swing')
})

const $burger = $('.burger')
// /* FOOD PAGE NAV BAR ON SCROLL */
var waypoint = new Waypoint({
    element: document.getElementById('section-features'),
    handler: function(direction) {
        //console.log(this.element.id + ' Susla ylea ' + this.triggerPoint)
        console.log(' Susla ylea ')
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