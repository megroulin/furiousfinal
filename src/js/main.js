import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
  //variables
  var mapCursor = document.querySelector(".ysa");
  var globalScreen = document.querySelector(".global");

  //timeline
  function timelineInit() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: globalScreen,
        start: "top",
        end: "4000px",
        // markers: true,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          var ysaProgress = self.progress * 88;
          mapCursor.style.left = ysaProgress + "%";
        },
      },
    });
  }
});
