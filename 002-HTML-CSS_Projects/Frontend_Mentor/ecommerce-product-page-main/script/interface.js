
<<<<<<< HEAD
$("#1").children().addClass("on")
=======
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992

class Switcher_thumbs {
    constructor(thumbnail,main_image,button_right,button_left) {
        this.thumb = $(thumbnail);
        this.thumb_list = $(thumbnail).get();
        this.main_image = $(main_image);
        this.button_right = $(button_right);
        this.button_left = $(button_left);
        this.id = $(thumbnail).attr("id")
    }   

    queue() {
        this.thumb.children().removeClass("on")
    }

    switchIMG(element, id) {
        element.children().toggleClass("on")
        this.main_image.attr("src", "./images/image-product-" + id + ".jpg");
    }


    eventClick() {
        this.thumb_list.forEach(element => {
            let id = $(element).attr('id')
            $(element).click(() => {
                this.queue();
                this.switchIMG($(element), id);
            })
        });

<<<<<<< HEAD
thumb.forEach(elements => {
    $(elements).click(() => {
        switch_images(elements);
    });
});
=======
        this.button_right.click(()=> {
            this.queue()
            if (this.id < 4) {
                this.id++;
                $("#" + this.id).children().toggleClass("on");
                $(".main_image").attr("src", "images/image-product-" + this.id + ".jpg");
            }
        });
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992

        this.button_left.click(()=> {
            this.queue()
            if (this.id > 1) {
                this.id--;
                $("#" + this.id).children().toggleClass("on");
                $(".main_image").attr("src", "images/image-product-" + this.id + ".jpg");
            }
        })
    }

<<<<<<< HEAD
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

=======
    init() {
        if (this.thumb) {
            this.thumb.filter("#1").children().addClass("on")
            
            this.eventClick();

        }
        return this;
    }
}

const thumbs = new Switcher_thumbs(
    ".thumbnail",
    ".main_image",
    ".button_right",
    ".button_left"    
)

class Cart {
    constructor(cart_popup, count_cart, button_add, button_cart, content_popup, amount, main_title, price, exclude) {
        this.cart_popup = $(cart_popup)
        this.count_cart = $(count_cart)
        this.button_add = $(button_add)
        this.button_cart = $(button_cart)
        this.content_popup = $(content_popup)
        this.amount = $(amount)
        this.main_title = $(main_title).html()
        this.price = $(price)
        this.exclude = $(exclude)

        this.count = 0

    }

    excludeClick() {
        this.content_popup.text("your cart is empty")
    }

    popupClick() {
        this.count = 0;
        this.count_cart.hide();
        
        this.cart_popup.fadeToggle(200);
    }
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992

    addProduct() {
        this.count++
        this.count_cart.text(this.count)

        this.count_cart.show();

        this.content_popup.html(`
        <div class='product_popup'>
            <img src='images/image-product-1-thumbnail.jpg'>
            <div class="text_product">
                <h1>${this.main_title}</h1>
                    <p>${this.price.text()} x ${this.amount.val()} 
                    <span style="font-weight: bold; color: black"> 
                        $${Number(this.price.text()) * this.amount.val()}.00
                    </span>
                    </p>
            </div>

            <div class="exclude" onclick="cart.excludeClick()" style="cursor: pointer">
                <img src="images/icon-delete.svg">
            </div>
        </div>

        <button class="checkout_button">Checkout</button>
        `)
    }

<<<<<<< HEAD
        if ($(".responsive_menu").html() == icon_menu) {

            $(".responsive_menu").html("<img src='images/icon-close.svg'></img>");


        } else {
            $(".responsive_menu").html("<img src='images/icon-menu.svg'>");
=======

    eventClick() {
        this.button_add.click(() => {this.addProduct()});
        this.button_cart.click(() => {this.popupClick()});
    }
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992

    init() {
        if (this.button_cart) {
            this.eventClick();
        }
<<<<<<< HEAD

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
=======
        return this;
    }

}

const cart = new Cart(
    ".cart_popup",
    ".count_cart",
    "#button_add",
    ".button_cart",
    ".content_popup",
    "#amount",
    ".main_title",
    "#price",
    ".exclude"
)

class Buttons {
    constructor (min_b, max_b, amount) {
        this.min_b = $(min_b);
        this.max_b = $(max_b);
        this.amount = $(amount);
        this.cont = $(amount).val()
    }
    decrease() {      
        if (this.cont > 0) {
            this.cont--
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992
        } else {
            this.cont = 0;
        }
<<<<<<< HEAD
        $("#amount").val(cont);

    })

    $("#max_b").click(() => {
        let cont = $("#amount").val()

        if (cont >= 0) {
            cont++
=======
        this.amount.val(this.cont);
    }

    increase() {      
        if (this.cont >= 0) {
            this.cont++
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992
        } else {
            this.cont = 0;
        }
<<<<<<< HEAD
        $("#amount").val(cont);

    })
}
=======
        this.amount.val(this.cont);
    }

    eventClick() {
        this.min_b.click(()=>{this.decrease()})
        this.max_b.click(()=>{this.increase()})
>>>>>>> a3df27aa2da4a9b6ecf34ec7e7e3540ef9409992

    }

    init() {
        if(this.amount) {
            this.eventClick();
        }        
    }
}

const buttons = new Buttons(
    "#min_b",
    "#max_b",
    "#amount"
)

$().ready(()=>{
    thumbs.init();
    buttons.init();
    cart.init();
})

