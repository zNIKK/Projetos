
let tumb = [$(".thumbnails").html()]
tumb.forEach((element) => {
    $(element).attr("id", function (i, orig) {
        return orig 
    });
});