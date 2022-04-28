

 const navToggle = document.querySelector(".nav-toggle");
 const nav = document.querySelector(".nav");
 const navOverlay = document.querySelector(".nav-overlay");
 const closeNav = document.querySelector(".close");

 navToggle.addEventListener("click",() =>{
 	navShow();
 })
 closeNav.addEventListener("click",() =>{
 	hideNav();
 })
 
 // hide nav after clicked outside of nav
 navOverlay.addEventListener("click",(e) =>{
   hideNav();
 })

 function navShow(){
    navOverlay.style.transition = "all 0.5s ease";
    navOverlay.classList.add("open");
    nav.style.transition = "all 0.3s ease 0.5s";
    nav.classList.add("open");
 }

 function hideNav(){
   nav.style.transition = "all 0.3s ease";
   nav.classList.remove("open");
   navOverlay.style.transition = "all 0.5s ease 0.3s";
   navOverlay.classList.remove("open");
 }

 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}