// toggle style switcher
const styleSwitcherToggle= document.querySelector(".style-switcher-toggler");
const styleSwitcher=document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click",()=>{
    styleSwitcher.classList.toggle("open")
})

// hide style switcher on scroll 
window.addEventListener("scroll",()=>{
    if(styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open");
    }
})

// theme colors
const alternateStyle=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        } else{
            style.setAttribute("disabled","true");
        }
    })
}

// light mode  and dark mode themes
const dayNight=document.querySelector(".day-night");
const dayNightBtn=document.querySelector(".day-night-btn");
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})