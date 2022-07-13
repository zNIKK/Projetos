let icon_menu = '<img src="images/icon-menu.svg">'

$(".responsive_menu").click(() => {
    
    console.log($(".responsive_menu").html());

    if ($(".responsive_menu").html() == icon_menu) { 

        $(".responsive_menu").html("<img src='images/icon-close.svg'></img>");
        
    } else {
        $(".responsive_menu").html("<img src='images/icon-menu.svg'>");
    }
    
    let menu = $("#menu");

    $(".curtain").toggleClass("close")
    menu.toggleClass("menu");
    $(".list").toggleClass("appear");
    menu.append($(".list"));
    
})


