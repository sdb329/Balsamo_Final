


// import $ from "jquery";

// let $nav = $('nav[data-nav]');
// let isVisible = false;

// $(".nav-btns").on("click", function(){
//     // console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// })

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function scrollAnimation(){
    console.log("this is working test123");

    const tl = new gsap.timeline();

    tl.from("#hero",{
        duration: 6,
        // x: "+=150",
        alpha: 0,
        stagger: 0.4,
        ease: "back",
        scrollTrigger: {
            trigger: "#hero-image",
            toggleActions: "restart none resume none",
            markers: true,
            scrub: true
        }
    });

}

window.addEventListener('load', function(){

    scrollAnimation()
    
});
