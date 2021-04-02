gsap.registerPlugin(ScrollTrigger);

// loading screen
let beeWrapper = document.querySelector(".bee-wrapper");
window.addEventListener("load", function () {
  beeWrapper.style.display = "none";
});

// navbar animations

gsap.from(".navbar", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".nav-link", { duration: 2, opacity: 0, delay: 1, stagger: 0.3 });
gsap.from(".navbar-brand", {
  duration: 1,
  y: "-150%",
  ease: "elastic",
  delay: 1,
});
gsap.from(".main-info", { duration: 1.5, x: "-200%", ease: "back", delay: 2 });

//main page animations

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".test-photos",
    start: "50% bottom",
  },
});

let tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-id",
    start: "150% bottom",
  },
});

tl.from(".images", { x: "300%", opacity: 0, duration: 1, stagger: 0.2 });
tl.from(".text-test", { opacity: 0, duration: 0.2, stagger: 0.1 }, "-=0.3");

tl.from(
  ".about-info-text",
  {
    x: "-100%",
    opacity: 0,
    duration: 1,
    ease: "bounce",
    delay: 0.5,
  },
  "-=1"
);

tl.from(
  ".woman-image",
  {
    x: "100%",
    opacity: 0,
    duration: 1,
    ease: "bounce",
    stagger: 1,
    delay: 0.5,
  },
  "-=1"
);

// code for modal

const modal = document.getElementById("modalBodyId");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
