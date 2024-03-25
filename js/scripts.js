//Hamburger Menu Fuction 

function Hamburger(){
    var menu = document.getElementById("nav__link"); 
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }   else{
        menu.style.display = "block"; 
    }
}  

//Function to display the first answer 
function ans1(){ 
    heading.style.display = "block"; 
    answer.textContent = "Trial and error... and error and error...";
} 

//Function to display the second answer 
function ans2(){
    heading.style.display = "block"; 
    answer.textContent = "My favorite color is blue!";
} 

//Function to display the third answer 
function ans3(){
    heading.style.display = "block"; 
    answer.textContent = "I like running, going to the gym and drawing in my free time."; 
}

//Function to display the fourth answer 
function ans4(){ 
    heading.style.display = "block"; 
    answer.textContent = "Feel free to add me on Discord."; 
}

