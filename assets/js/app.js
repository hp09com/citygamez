$("#app").load("city.html")
$(".list-item").click(function(){
    $(".list-item.active").removeClass('active')
});
$("#goToCity").click(function(){
    $("#goToCity").addClass('active')
    $("#app").load("city.html")
});
$("#goOutSide").click(function(){
    $("#goOutSide").addClass('active')
    $("#app").load("outCity.html")
})
light()
function light(){
    $( "body" ).animate({backgroundColor: "#ded145"}, 150000 );
    setTimeout(function(){
        dark();
    }, 0);
}
function dark(){
    $( "body" ).animate({backgroundColor: "#373a3d"}, 150000 );
    setTimeout(function(){
        light();
    }, 0);
}
