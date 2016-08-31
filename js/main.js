var googleMap = '<div id="map"></div>';

function reSize(p) {

    return Math.floor(window.innerHeight/100 * (p?p:85));
}

function scrollDown() {
    $("#main").stop().css({"scrollTop": $("#main")[0].scrollHeight}).animate({scrollTop: $("#main")[0].scrollHeight
    }, 1000);
}


function showHome() {
    var h = $("#main .home");
    h.slideToggle("slow")

}

function zoomImage(obj) {
      var s = $(obj).attr("state");
      switch(s) {

        case "zoomedOut":
            $(obj).css({"transform" : "scale(1.2)"});
            $(obj).attr("state", "zoomedIn");
            $(obj).addClass("absolute");
            setTimeout('$("#overLay").show();', 0);
            break;
        case "zoomedIn":
        default:
            $(obj).css({"transform": "scale(1)"});
            $(obj).attr("state", "zoomedOut");
            $(obj).removeClass("absolute");
            setTimeout('$("#overLay").hide();', 0);
            break;

      }

}

function showMore() {
    var o = $("#more");
    var olink = $("#moreLink");
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
            o.fadeIn(500, function() {
                olink.text("Less ...");
                scrollDown();
                o.attr("vis", "show");
                //o.css("display", "flex");
            });

    }


}


$(document).ready(function() {

    //alert(reSize());
    $("main").height(reSize() + "px");
    $(".tab-content").height(reSize(75) + "px");

    $(window).resize(function() {
        $("main").css("height", reSize() + "px");
        $(".tab-content").css("height", reSize(75) + "px");

    });

    $("body").tooltip({ selector: '[data-toggle="tooltip"]' });
    $("#main img").click(function(){
        zoomImage(this);
    });

    $("#main img").addClass("img-responsive");


});





