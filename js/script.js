const features = document.querySelector(".features");
const company =  document.querySelector(".company");
const featuresMenu = document.querySelector(".features-submenu");
const companyMenu = document.querySelector(".company-submenu");



let mediaqueryList = window.matchMedia("(max-width: 375px)");

if(mediaqueryList.matches) {
    
  }

features.addEventListener('mouseenter', ()=> {featuresMenu.style.visibility = 'visible'})
features.addEventListener('mouseleave', ()=> {featuresMenu.style.visibility = 'hidden'})
featuresMenu.addEventListener('mouseenter', ()=> {featuresMenu.style.visibility = 'visible'})
featuresMenu.addEventListener('mouseleave', ()=> {featuresMenu.style.visibility = 'hidden'})

company.addEventListener('mouseenter', ()=> {companyMenu.style.visibility = 'visible'})
company.addEventListener('mouseleave', ()=> {companyMenu.style.visibility = 'hidden'})
companyMenu.addEventListener('mouseenter', ()=> {companyMenu.style.visibility = 'visible'})
companyMenu.addEventListener('mouseleave', ()=> {companyMenu.style.visibility = 'hidden'})