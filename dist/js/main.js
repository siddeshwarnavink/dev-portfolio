// Menu DOM elements
const menuIcon = document.getElementById("menuIcon");
const menuLinks = document.getElementById("menuLinks");

// Auto-highlite toolbar DOM
const toolbar = document.getElementById("toolbar");

// Carousel DOM elements
const dotsContaner = document.getElementById("dotsContainer");
const carouselContainer = document.getElementById("carouselContainer");

// Helper functions
function ch(el, index) {
  return el.children.item(index);
}

// Menu functions
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("close");
  menuLinks.classList.toggle("close");
});

// Auto-highlite toolbar
const toolbarHeight = 80;

function sethighliteMode(isHighlighted) {
  if (isHighlighted) {
    toolbar.classList.add("highlight");
  } else {
    toolbar.classList.remove("highlight");
  }
}

document.addEventListener("scroll", () => {
  const pxFromTop = window.scrollY || window.pageYOffset;

  if (pxFromTop > toolbarHeight) {
    sethighliteMode(true);
  } else {
    sethighliteMode(false);
  }
});

// Carousel functions
let currentPage = 0;

setInterval(() => {
  if (currentPage == carouselContainer.children.length - 2) {
    pushSlide(0);
  } else {
    pushSlide(currentPage + 1);
  }
}, 3500);

function forEachChildOf(parrentEl, cb) {
  for (let i = 0; i < Array(parrentEl.children.length).length; i++) {
    cb(i);
  }
}

function pushSlide(index) {
  currentPage = index;

  forEachChildOf(carouselContainer, (index) => {
    ch(carouselContainer, index).classList.remove("current");
  });
  forEachChildOf(dotsContaner, (index) => {
    ch(dotsContaner, index).classList.remove("active");
  });

  ch(dotsContaner, index).classList.toggle("active");
  ch(carouselContainer, index).classList.toggle("current");
}

forEachChildOf(dotsContaner, (index) => {
  ch(dotsContaner, index).addEventListener("click", () => {
    pushSlide(index);
  });
});
