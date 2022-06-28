// const features = document.querySelector(".features");
// const featuresMenu = document.getElementById("feat-submenu");

// const endPart = document.querySelector('.end');


// let mediaqueryList = window.matchMedia("(max-width: 740px)");

// if (mediaqueryList.matches) {
//   features.addEventListener("click", () => {
//     featuresMenu.style.margin = '0px 0px 160px 0px';
//     endPart.style.margin = '360px 0px 0px 0px';
//   })
// }

const features = document.querySelector(".features");
const featuresMenu = document.querySelector(".features-menu");
const company = document.querySelector(".company");
const companyMenu = document.querySelector(".company-menu");

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const endPart = document.querySelector('.end');


let mediaqueryList = window.matchMedia("(max-width: 740px)");

if (mediaqueryList.matches) {

  menu.addEventListener("mouseenter", ()=> {
    navbar.style.display = 'flex';
    menu.style.display = 'none';
    close.style.display = 'block';
  })
  
  
  close.addEventListener("mouseenter",()=> {
    navbar.style.display = 'none';
  })
  
  
  navbar.addEventListener("mouseenter", ()=> {
    navbar.style.display = 'flex';
  })

  features.addEventListener("mouseenter", () => {
    featuresMenu.style.margin = '0px 0px 160px 0px';
    endPart.style.margin = '360px 0px 0px 0px';
  })
  features.addEventListener("mouseleave", () => {
    featuresMenu.style.margin = '0px 0px 0px 0px';
    endPart.style.margin = '0px 0px 0px 0px';
  })
  company.addEventListener("mouseenter", () => {
    companyMenu.style.margin = '0px 0px 160px 0px';
    endPart.style.margin = '360px 0px 0px 0px';
  })
  company.addEventListener("mouseleave", () => {
    companyMenu.style.margin = '0px 0px 0px 0px';
    endPart.style.margin = '0px 0px 0px 0px';
  })
}