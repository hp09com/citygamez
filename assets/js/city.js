var peoHouse = 4,
product = [9, 8]
apm = [5, 5, 5]
const house = '<div class="house col-d-16"><div class="nFamily" title="Family K">K</div><div class="mFamily"><p><span id="members">'+peoHouse+'</span> người</p></div></div>'
const shop = '<div class="shopping col-d-8 bg-heliotrope"><div class="nShop" title="Shopping K">K</div><div class="rShop">9</div></div>'
const apartment = '<div class="apartment col-d-4"><div class="nAPM" title="Apartment K">K</div><div class="rAPM" title="Ranking 10">10</div><div class="iAPM"><div class="placeA"><p>'+apm[0]+' người</p></div><div class="placeB"><p>'+apm[1]+' người</p></div><div class="placeC"><p>'+apm[2]+' người</p></div></div></div>'
var nhouse = nshop = napm = 1
$(window).ready( () => {
    $("#btnAdd_house").on("click", () => {
        nhouse++
        if(building(nhouse, 'house'))
        { $("#bhs").append(house) }
    })
    $("#btnAdd_shop").on("click", () => {
        nshop++
        if(building(nshop, 'shop'))
        { $("#bhs").append(shop) }
    })
    $("#btnAdd_apartment").on("click", () => {
        napm++
        if(building(napm, 'apm'))
        { $("#bhs").append(apartment) }
    })
})

function building(num, key){
    if (key == 'house' && num <=20)
    { return true }
    if(key == 'shop' && num <= 10 || key == 'apm' && num <= 10)
    { return true }
    return false
}
$(".building *").mouseenter( () => {
    $(".base").show()
})
$(".building").mouseleave( () => {
    $(".base").hide()
})