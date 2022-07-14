let buy_list = []

$("main").prepend("<div class='cart_popup'></div>")

$(".button_cart").click(() => {
    
    $(".cart_popup").fadeToggle(200 ,() => {
        $(".cart_popup").toggleClass("active")
    })

})
$(".button_add").click(() => {

})