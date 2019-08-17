// FOOTER CONTACT
const bgModal = $('.bg-modal')
bgModal.hide()

$("#footer-contact").on('click', function(e){
    $("body").css("overflow-y", "hidden");

    bgModal.show()
})



$('.bg-modal').on('click', function(e){
    bgModal.hide()
})


$('.bg-modal__content').on('click', function(e){
    e.stopPropagation();
})

$('.bg-modal__content--close').on('click', function(e){

    $("body").css("overflow-y", "auto");

    bgModal.hide()
})