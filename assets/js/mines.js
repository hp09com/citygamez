var mcFarm = $(".mc-farm")
var total = mcFarm.length//Count class exist
var widthMine = 6000
var heightMine = 6000
var heightPage = $('.main').height()
var widthPage = $('.main').height()
// city, 171.31
var scrollHeight = heightPage-(50/100)*heightPage - 20*screen.height/100
var scrollWidth = widthPage-(50/100)*widthPage - 42.3*screen.width/100
var x = y = 0
var isFullScreen = document.fullScreen || 
                   document.mozFullScreen || 
                   document.webkitIsFullScreen;
for (let index = 1; index <= total; index++) {
    x = Math.floor(Math.random() * widthMine)
    y = Math.floor(Math.random() * heightMine)
    const elements = $(".mc-farm[data-sortid='"+index+"']")
    x = locateX(x, widthMine)
    y = locateY(y, heightMine)  
    elements.css("left", x)
    elements.css("top", y)
    //.attr("sort-id", "x: "+x+"y: "+y)
}

function locateX(x, widthMine)
{
    if(x < 1100 || x > 1400) 
    {
        return x
    }
    x = Math.floor(Math.random() * widthMine)
    locateX(x, widthMine)
}

function locateY(y, heightMine)
{
    if(y < 1800 || y > 2200)
    {
        return y
    }
    y = Math.floor(Math.random() * heightMine)
    locateY(y, heightMine)
}

// Hiện city của mình
$(document).ready( function() {
    $('html, body').scrollLeft(scrollWidth)
    
    $("html, body").scrollTop(scrollHeight)
})
function moveToX(x)
{
    x = -50+x + (-x + x/1.32);
    console.log(x)
    $('html, body').scrollLeft(x);
    //moveToRight(x)
}
function moveToY(y)
{
    y = -100+ y - (10/100) * y
    $('html, body').scrollTop(y);
    //moveToLeft(x)
}
$('.main#outSide').mousemove( (e) => {
    var x = e.pageX - $('.main').offset().left;
    var y = e.pageY - $('.main').offset().top;
    console.log(x);
    moveToX(x)
    moveToY(y)

    //y = moveScreenY(y)
})
$(document).ready( () => {
    $(".mc-farm[data-src='false']").on("click", function(e){
        var id = $(this).data('sortid')
        console.log(id)
        $("#qGetResources").modal("show")
    });
})