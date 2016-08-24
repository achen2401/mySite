
$(document).ready(function() {

    //alert(reSize());
    $("main").height(reSize() + "px");

    $(window).resize(function() {
        $("main").css("height", reSize() + "px");

    });

    $("body").tooltip({ selector: '[data-toggle="tooltip"]' });


});

function reSize() {
    return Math.floor(window.innerHeight/100 * 80);
}

function scrollDown() {
    $("#main").stop().css({"scrollTop": $("#main")[0].scrollHeight}).animate({scrollTop: $("#main")[0].scrollHeight
    }, 1000);
}


function showHome() {
    var h = $("#main .home");
    h.slideToggle("slow")

}

function showMore() {
    var o = $("#more");
    var olink = $(".morelink");
    var vis = o.attr("vis");

    switch(vis) {
        case "show":
            o.fadeOut(500, function() {
                olink.text("More ...");
                //o.hide();
                o.attr("vis", "hide");
            });

            break;
        case "hide":
            o.fadeIn(function() {
                o.attr("vis", "show");
                olink.text("Less ...");
                //o.css("display", "flex");
                scrollDown();
            });


            break;

        default:
            o.fadeIn(300, function() {
                olink.text("Less ...");
                scrollDown();
                o.attr("vis", "show");
                //o.css("display", "flex");
            });

    }


}

