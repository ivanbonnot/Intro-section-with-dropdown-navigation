const features = document.querySelector(".features");
const featuresMenu = document.querySelector(".features-menu");
const endPart = document.querySelector('.end');

let mediaqueryList = window.matchMedia("(max-width: 740px)");

if(mediaqueryList.matches) {
    features.addEventListener("click", ()=> {
      featuresMenu.style.margin = '0px 0px 160px 0px';
      endPart.style.margin = '300px 0px 0px 0px'

    })
  }
