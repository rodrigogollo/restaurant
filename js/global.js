var drop = document.querySelector("#vector");
drop.addEventListener("click",function(){
    var droplist = document.querySelector(".droplist");
    if(droplist.style.display == "block"){
        droplist.style.display = "none";
        document.querySelector(".image").style.marginTop = "44px";
    } 
    else{
        droplist.style.display = "block";
        document.querySelector(".image").style.marginTop = "169px";
    } 
});
/* não tem hover no celular 

var droplistLi = document.querySelectorAll(".droplist ul a");
droplistLi.forEach(function(el){
    el.addEventListener("mouseover", function() {
       el.firstElementChild.classList.add("colorize");
       el.firstElementChild.classList.remove("descolorize");
    });
    
    el.addEventListener("mouseout", function() {
        el.firstElementChild.classList.add("descolorize");
        el.firstElementChild.classList.remove("colorize");
    });
  
});
  */

setInterval(function(){
    if(document.documentElement.clientWidth+17 >= 768){
        document.querySelector(".droplist").style.display = "none";
        document.querySelector(".image").style.marginTop = "44px";
    }
}, 100);