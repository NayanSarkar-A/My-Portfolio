const navAddCloseBtn=document.querySelector(".nav-toggler");
const nav=document.querySelector(".aside");
let turn=true;

navAddCloseBtn.addEventListener("click",()=>{
    if(turn){
        nav.style.left="0px"
        navAddCloseBtn.classList.add("open");
        turn=false;
    }else{
        nav.style.left="-500px"
        navAddCloseBtn.classList.remove("open")
        turn=true;
    }
})

// typing animation
var typed= new Typed(".typing",{
    strings : ["Web Developer " ,"Freelancer","Front End Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

// aside
const navBar=document.querySelector(".nav");
const navList=navBar.querySelectorAll("li");
const allSection=document.querySelectorAll(".section");
for(let i=0 ;i<navList.length;i++){
    const a =navList[i].querySelector("a");
    a.addEventListener("click",function (){
        removeBackSection();
        if(window.innerWidth<1200){
            nav.style.left="-500px";
            navAddCloseBtn.classList.remove("open");
        }
        for(let i =0;i<allSection.length;i++){
            allSection[i].classList.remove("back-section");
        }
        for(let i=0; i<navList.length;i++){
            if(navList[i].querySelector("a").classList.contains("active")){
                allSection[i].classList.add("back-section");
            }
            navList[i].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    for(let i =0;i<allSection.length;i++){
        allSection[i].classList.remove("active");
    }
    const target= element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}
function removeBackSection(){
    
}
// 
let hireMeBtn=document.querySelector(".hire-me");
hireMeBtn.addEventListener("click", function (){
    const sectionIndex=this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
})
function updateNav(element){
    for(let i=0; i<navList.length;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target= element.getAttribute("href").split("#")[1];
        if(target=== navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}