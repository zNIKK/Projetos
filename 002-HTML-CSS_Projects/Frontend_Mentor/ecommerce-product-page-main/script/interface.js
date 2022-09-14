let thumb = $(".thumbnail").get();
let count_images = 1

$("#1").children().addClass("on")


thumb.forEach(elements => {
    $(elements).click(() => {
        switch_images(elements);
    });
});


function switch_images(element) {

    $(element).children().toggleClass("on");
    let id = $(element).attr("id");
    $(".main_image").attr("src", src = "images/image-product-" + id + ".jpg");
    console.log($(element).children().attr('class'));
};

//$(".button_right").click(() => {
//    if (count_images < 4){
//        count_images++
//    }

//    $(".main_image").attr("src", src = "images/image-product-"+ count_images +".jpg");

//})




function nav() {
    let icon_menu = '<img src="images/icon-menu.svg">'


    $(".menu").remove();
    $(".left").append("<div class='menu'></div>")


    console.log($(".menu").html())

    $(".responsive_menu").click(() => {
        $(".list_copia").remove()

        let menu = $(".menu");


        if ($(".responsive_menu").html() == icon_menu) {

            $(".responsive_menu").html("<img src='images/icon-close.svg'></img>");


        } else {
            $(".responsive_menu").html("<img src='images/icon-menu.svg'>");

        }

        menu.animate({ height: 'toggle' }, 200, () => {

            menu.append('<ul class="list_copia"><a href="*"><li>Collections</li></a><a href="*"><li>Men</li></a><a href="*"><li>Women</li></a><a href="*"><li>About</li></a><a href="*"><li>Contact</li></a></ul>');
            $(".list_copia").toggleClass("appear");

        });

        $(".curtain").toggleClass("close");
    })

}


function cart() {
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
}


function buttons() {
    $("#min_b").click(() => {
        let cont = $("#amount").val()

        if (cont > 0) {
            cont--
        } else {
            cont = 0;
        }
        $("#amount").val(cont);

    })

    $("#max_b").click(() => {
        let cont = $("#amount").val()

        if (cont >= 0) {
            cont++
        } else {
            cont = 0;
        }
        $("#amount").val(cont);

    })
}



