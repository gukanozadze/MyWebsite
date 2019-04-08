// FOOTER CONTACT
const bgModal = $('.bg-modal')
bgModal.hide()

$("#footer-contact").on('click', function(e){
    e.preventDefault()
    $("body").css("overflow-y", "hidden");

    bgModal.show()
})

$('.bg-modal__content--close').on('click', function(e){
    e.preventDefault()

    $("body").css("overflow-y", "auto");

    bgModal.hide()
})