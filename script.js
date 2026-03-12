function openMenu(){
document.getElementById("sidebar").style.left = "0";
}

function closeMenu(){
document.getElementById("sidebar").style.left = "-260px";
}

/* auto close sidebar when screen resize to desktop */

window.addEventListener("resize", function(){

if(window.innerWidth > 768){
document.getElementById("sidebar").style.left = "-260px";
}

});

function openMenu(){
document.getElementById("sidebar").style.left="0";
document.body.style.overflow="hidden";
}

function closeMenu(){
document.getElementById("sidebar").style.left="-260px";
document.body.style.overflow="auto";
}