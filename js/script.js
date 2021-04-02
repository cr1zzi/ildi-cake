gsap.registerPlugin(ScrollTrigger);

// animations

gsap.from(".navbar", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".nav-link", { duration: 2, opacity: 0, delay: 1, stagger: 0.3 });
gsap.from(".navbar-brand", {
  duration: 1,
  y: "-150%",
  ease: "elastic",
  delay: 1,
});
gsap.from(".main-info", { duration: 1.5, x: "-200%", ease: "back", delay: 2 });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".test-photos",
    start: "80% bottom",
  },
});

tl.from(".images", { x: "300%", opacity: 0, duration: 1, stagger: 0.2 });
tl.from(".text-test", { opacity: 0, duration: 1, stagger: 0.2 }, "-=1");

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
