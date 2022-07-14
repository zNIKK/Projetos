let icon_menu = '<img src="images/icon-menu.svg">'
$(".left").append("<div class='menu'></div>")


$(".responsive_menu").click(() => {
    $(".list_copia").remove()
    
    let menu = $(".menu");


    if ($(".responsive_menu").html() == icon_menu) { 

        $(".responsive_menu").html("<img src='images/icon-close.svg'></img>");
    
    } else {
        $(".responsive_menu").html("<img src='images/icon-menu.svg'>");

    }

    menu.animate({height: 'toggle'},200,() => {
        menu.toggleClass("active_menu");

        menu.append('<ul class="list_copia"><a href="*"><li>Collections</li></a><a href="*"><li>Men</li></a><a href="*"><li>Women</li></a><a href="*"><li>About</li></a><a href="*"><li>Contact</li></a></ul>');
        $(".list_copia").toggleClass("appear");

    });

    $(".curtain").toggleClass("close");
})

