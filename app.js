//menu 
var menuvisible=false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu (){ 
    if (menuvisible==false){ 
    menu.style.display = "block";
    menuvisible = true;
}
else{
    menu.style.display = "none";
    menuvisible = false;
}
}

// ocultar el menu, luego de seleccion una opcion
let links =document.querySelectorAll("nav a");
for (var x=0; x<links.length;x++){
 links[x].onclick=function(){
    menu.style.display = "none";
    menuvisible=false;
 }   
}

