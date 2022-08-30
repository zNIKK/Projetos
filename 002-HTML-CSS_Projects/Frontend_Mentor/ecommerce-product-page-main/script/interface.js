// console.log($(".thumbnail").attr("id"));
class Switcher_thumbs {
    constructor(thumbnail,main_image) {
        this.thumb = $(thumbnail);
        this.thumb_list = $(thumbnail).get();
        this.main_image = $(main_image);
    }   

    queue() {
        this.thumb.children().removeClass("on")
    }

    switchIMG(element, id) {

        element.children().toggleClass("on")
        this.main_image.attr("src", "./images/image-product-" + id + ".jpg");
    }

    eventClick() {
        let id = this.thumb.attr("id")

        this.thumb_list.forEach(element => {
            let id = $(element).attr('id')
            $(element).click(() => {
                this.queue();
                console.log(id);
                this.switchIMG($(element), id);
            })
            console.log(id);
        });
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
)

thumbs.init();


// let thumb = $(".thumbnail").get();
// let id = $(".thumbnail").attr("id")

// $(".thumbnail").click(() => {
//     $(".thumbnail").children().removeClass('on')
// })

// $("#1").children().addClass("on")


// thumb.forEach(element => {
//     $(element).click(() => {
//         switch_images($(element))
//     });

// });


// function switch_images(img) {
//     img.children().toggleClass("on")
//     id = img.attr("id")
//     $(".main_image").attr("src", src = "images/image-product-" + img.attr("id") + ".jpg");
// };

// $(".button_left").click(() => {
//     $(".thumbnail").children().removeClass("on")

//     $(id).toggleClass("on")
//     if (id > 1) {
//         id--
//         $(".main_image").attr("src", src = "images/image-product-" + id + ".jpg");
//     }
//     $("#" + id).children().toggleClass("on")

// });

// $(".button_right").click(() => {
//     $(".thumbnail").children().removeClass("on")

//     if (id < 4) {
//         id++
//         $(".main_image").attr("src", src = "images/image-product-" + id + ".jpg");

//     }
//     $("#" + id).children().toggleClass("on")
// })
// });

// function cart() {
//     let c = 0

//     $("body").prepend("<div class='cart_popup'></div>")
//     $(".cart_popup").html("<h1 class='title_popup'>cart</h1><div class='content_popup'>your cart is empty</div>")
//     $(".button_cart").click(() => {

//         $(".cart_popup").fadeToggle(200)
//         $(".count_cart").remove()
//         c = 0


//     })

//     $("#button_add").click(() => {
//         let title_product = $(".main_title").text()
//         let main_price = $(".main_value").text()
//         console.log(Number($("#abc").text() + 1));
//         c++
//         $('.button_cart').append(`<div class='count_cart'>${c}</div>`);
//         $('.content_popup').html(`
//         <div class='product_popup'>
//             <img src='images/image-product-1-thumbnail.jpg'>
//         <div class="text_product">
//             <h1>${title_product}</h1><p style="display: flex; justify-content: space-evenly;">${main_price} x ${$("#amount").val()} <span style="font-weight: bold; color: black"> $${Number($("#price").text()) * $("#amount").val()}.00</span></p>
    
//         </div>
//         <div class="delete" style="cursor: pointer">
//             <img src="images/icon-delete.svg">
//         </div>
    
//         </div>
//         <button class="checkout_button">Checkout</button>
//         `)

//         $(".delete").click(() => {
//             $(".product_popup").remove()
//             $(".checkout_button").remove()
//             $(".content_popup").text("your cart is empty")
//         })
//     })
// }


// function buttons() {
//     $("#min_b").click(() => {
//         let cont = $("#amount").val()

//         if (cont > 0) {
//             cont--
//         } else {
//             cont = 0;
//         }
//         $("#amount").val(cont);

//     })

//     $("#max_b").click(() => {
//         let cont = $("#amount").val()

//         if (cont >= 0) {
//             cont++
//         } else {
//             cont = 0;
//         }
//         $("#amount").val(cont);

//     })
// }
