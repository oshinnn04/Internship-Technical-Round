// alert("working")

var main = document.querySelector("#main")
var curs = document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    curs.style.left = dets.x +10+ "px"
    curs.style.top = dets.y +10+ "px"
})

