
let thumb = $(".thumbnail").get();
a = []
let count_images = 1


thumb.forEach(element => {
    $(element).click(() => {
        let count_images = 1
        let id = $(element).attr("id")
        $(element).children().toggleClass("on")
        $(element).children().attr("class");
        $(".main_image").attr("src", src = "images/image-product-"+ id +".jpg" );
        console.log($(".main_image").attr("src"));
        // $(".main_image").html($(element).html()) 
    })

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

    