
let thumb = $(".thumbnail").get();
a = []
let count_images = 1

$("#1").children().addClass("on")
thumb.forEach(element => {
    $(element).click(() => {
        $(element).children().toggleClass("on")
        let id = $(element).attr("id")
        $(".main_image").attr("src", src = "images/image-product-"+ id +".jpg" );

    })
    console.log($(element).children().attr("class"));
});



$(".thumbnail").children().click(() => {
    $(".thumbnail").children().removeClass("on")

})

$(".button_left").click(() => {
    if (count_images > 1){
        count_images--
    }
    
    $(".main_image").attr("src", src = "images/image-product-"+ count_images +".jpg" );

})

$(".button_right").click(() => {
    if (count_images < 4){
        count_images++
    }

    $(".main_image").attr("src", src = "images/image-product-"+ count_images +".jpg");

})

    