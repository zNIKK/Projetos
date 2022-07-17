
let thumb = $(".thumbnail").get();
a = []
thumb.forEach(element => {
    $(element).click(() => {
        $(element).children().toggleClass("on")

    })
    console.log($(element).children().attr("class"));

});

    