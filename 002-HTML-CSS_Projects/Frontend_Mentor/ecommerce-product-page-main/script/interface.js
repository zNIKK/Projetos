

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

        this.button_right.click(()=> {
            this.queue()
            if (this.id < 4) {
                this.id++;
                $("#" + this.id).children().toggleClass("on");
                $(".main_image").attr("src", "images/image-product-" + this.id + ".jpg");
            }
        });

        this.button_left.click(()=> {
            this.queue()
            if (this.id > 1) {
                this.id--;
                $("#" + this.id).children().toggleClass("on");
                $(".main_image").attr("src", "images/image-product-" + this.id + ".jpg");
            }
        })
    }

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


    eventClick() {
        this.button_add.click(() => {this.addProduct()});
        this.button_cart.click(() => {this.popupClick()});
    }

    init() {
        if (this.button_cart) {
            this.eventClick();
        }
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
        } else {
            this.cont = 0;
        }
        this.amount.val(this.cont);
    }

    increase() {      
        if (this.cont >= 0) {
            this.cont++
        } else {
            this.cont = 0;
        }
        this.amount.val(this.cont);
    }

    eventClick() {
        this.min_b.click(()=>{this.decrease()})
        this.max_b.click(()=>{this.increase()})

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

