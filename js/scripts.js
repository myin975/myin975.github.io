//Hamburger Menu Fuction 

function Hamburger(){
    var menu = document.getElementById("nav__link"); 
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }   else{
        menu.style.display = "block"; 
    }
} 

