let buy_list = []

$("main").prepend("<div class='cart_popup'></div>")
$(".cart_popup").html("<h1 class='title_popup'>cart</h1><div class='content_popup'>your cart is empty</div>")
$(".button_cart").click(() => {
    
    $(".cart_popup").fadeToggle(200 ,() => {

    })

})
$(".button_add").click(() => {

})