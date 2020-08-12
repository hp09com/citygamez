const mcFarm = $(".mc-farm")
const total = mcFarm.length//Count class exist
const widthMine = 3500
const heightMine = 3827
var x = y = 0
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
$(document).ready( () => {
    $(".mc-farm[data-src='false']").on("click", function(e){
        const id = $(this).data('sortid')
        console.log(id)
        $("#qGetResources").modal("show")
    });
})