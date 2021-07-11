'use strict';



const navber = document.querySelector('#navber');
// const navber_height = navber.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        navber.classList.add('navber--dark');
    }else{
        navber.classList.remove('navber--dark');
    }
})


const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
    return;
    } 
    scrollIntoView(link)

});
const homecontect = document.querySelector('.home_contact')
homecontect.addEventListener('click',()=>{
    scrollIntoView('#contact')
});


const home = document.querySelector('.home_container');
const home_height = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / home_height
})










function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth" });
}
