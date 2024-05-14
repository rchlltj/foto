const navElement = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

if(hamburger){
    hamburger.addEventListener("click", ()=> {
        navElement.classList.toggle("nav--open");
        hamburger.classList.toggle("hamburger--open");
    });
    
}
if(navElement){
    navElement.addEventListener("click", () => {
        navElement.classList.remove("nav--open");
        hamburger.classList.toggle("hamburger--open");
    });     
}