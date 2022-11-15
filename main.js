// Menu Burger

const burger = document.querySelector(".menuBurger");
const navHeader = document.querySelector(".navLink");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navHeader.classList.toggle("active");
})

// Carousel non auto

document.body.onload=function(){
    nbr=3;
    p=0;
    description=document.getElementById("description");
    description.style.width=(83*nb)+"%";  
    for(i=1;i<=nbr;i++){

    }
}
// J'aurai aimé contunuer mais faute de temps je ne peux pas le terminer. je suis desolé


// carousel auto

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// c'est clairement pas parfait, j'ai clairement pas compris tout ce que j'ai marqué mais il y a quelque chose et c'est pas si mal
