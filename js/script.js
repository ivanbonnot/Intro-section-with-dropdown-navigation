const features = document.querySelector(".features");
const company =  document.querySelector(".company");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");

features.addEventListener('mouseenter', ()=> {featuresMenu.classList.add('active')})
features.addEventListener('mouseleave', ()=> {featuresMenu.classList.remove('active')})
featuresMenu.addEventListener('mouseenter', ()=> {featuresMenu.classList.add('active')})
featuresMenu.addEventListener('mouseleave', ()=> {featuresMenu.classList.remove('active')})

company.addEventListener('mouseenter', ()=> {companyMenu.classList.add('active')})
company.addEventListener('mouseleave', ()=> {companyMenu.classList.remove('active')})
companyMenu.addEventListener('mouseenter', ()=> {companyMenu.classList.add('active')})
companyMenu.addEventListener('mouseleave', ()=> {companyMenu.classList.remove('active')})