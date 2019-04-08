$("a[href^='#'").on('click', function(e){
    e.preventDefault()
    var target = this.hash

    var $target = $(target)

    $('html, body').animate({
        'scrollTop': $target.offset().top
    }, 1000,'swing', function(){
        window.location.hash = target
    })
})


// Navbar toggle
const toggleNavBar = function() {
    const burger = $('.burger')
    const nav = $('.nav_links')
    const navLinks = $('.nav_links li')


    // Hide show nav bar
    burger.on('click', () => {
        nav.toggleClass('nav_active')
        burger.toggleClass('clicked')
        // Animate LI
        navLinks.each( (index, list) => {

            if (list.style.animation){
                list.style.animation = ''
            }else{
                list.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.45}s`
            }
        })
    })  
}
toggleNavBar()


const hoverProject = function(){
    const link =$(this).attr('redirect')
    window.location.replace(link);
}
$('.project').click(hoverProject)





