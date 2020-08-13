var peoHouse = 4,
product = [9, 8]
apm = [5, 5, 5]
var house = '<div class="house col-d-16"><div class="nFamily" title="Family K">K</div><div class="mFamily"><p><span id="members">'+peoHouse+'</span> người</p></div></div>'
var shop = '<div class="shopping col-d-8 bg-heliotrope"><div class="nShop" title="Shopping K">K</div><div class="rShop">9</div></div>'
var apartment = '<div class="apartment col-d-4"><div class="nAPM" title="Apartment K">K</div><div class="rAPM" title="Ranking 10">10</div><div class="iAPM"><div class="placeA"><p>'+apm[0]+' người</p></div><div class="placeB"><p>'+apm[1]+' người</p></div><div class="placeC"><p>'+apm[2]+' người</p></div></div></div>'
var outSideCity = false;
var nhouse = nshop = napm = 1

function building(num, key){
    if (key == 'house' && num <=20)
    { return true }
    if(key == 'shop' && num <= 10 || key == 'apm' && num <= 10)
    { return true }
    return false
}
$(document).ready(()=>{
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
    $(".building *").mouseenter( () => {
        $(".base").show()
    })
    $(".building").mouseleave( () => {
        $(".base").hide()
    })
    $("#shopping_mall .modal-content").css('height', screen.height-(20/100)*screen.height)
    $("#shopping_mall .modal-dialog").css('max-width', screen.width-(5/100)*screen.width)
    $(".product").click(function(){
        var id = $(this).attr('productid'),
        name = $(this).find('.productName').html(),
        price = $(this).find('#price').html()
        console.log(id, name, price)
        $("#productPrice").html(price)
        $("#nameProduct").html(name)
        $("#viewProduct").modal("show")
    })
})
