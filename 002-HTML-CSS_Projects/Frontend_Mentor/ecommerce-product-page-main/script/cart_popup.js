let c = 0

$("body").prepend("<div class='cart_popup'></div>")
$(".cart_popup").html("<h1 class='title_popup'>cart</h1><div class='content_popup'>your cart is empty</div>")
$(".button_cart").click(() => {
    
    $(".cart_popup").fadeToggle(200)
    $(".count_cart").remove()
    c = 0


})

$("#button_add").click(() => {
    let title_product = $(".main_title").text()
    let main_price = $(".main_value").text()
    console.log(Number($("#abc").text() + 1));
    c++
    $('.button_cart').append(`<div class='count_cart'>${c}</div>`);
    $('.content_popup').html(`
    <div class='product_popup'>
        <img src='images/image-product-1-thumbnail.jpg'>
    <div class="text_product">
        <h1>${title_product}</h1><p style="display: flex; justify-content: space-evenly;">${main_price} x ${$("#amount").val()} <span style="font-weight: bold; color: black"> $${Number($("#price").text()) * $("#amount").val()}.00</span></p>

    </div>
    <div class="delete" style="cursor: pointer">
        <img src="images/icon-delete.svg">
    </div>

    </div>
    <button class="checkout_button">Checkout</button>
    `)

$(".delete").click(() => {
    $(".product_popup").remove()
    $(".checkout_button").remove()
    $(".content_popup").text("your cart is empty")
}) 
})



