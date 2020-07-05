// Menu DOM elements
const menuIcon = document.getElementById("menuIcon");
const menuLinks = document.getElementById("menuLinks");

// Auto-highlite toolbar DOM elements
const toolbar = document.getElementById("toolbar");

// Auto Nav-link active DOM elements
const sections = [
  document.getElementById("overview"),
  document.getElementById("services"),
  document.getElementById("works"),
  document.getElementById("about"),
  document.getElementById("contact"),
];

// Carousel DOM elements
const dotsContaner = document.getElementById("dotsContainer");
const carouselContainer = document.getElementById("carouselContainer");

// Helper functions
function ch(el, index) {
  return el.children.item(index);
}

function forEachChildOf(parrentEl, cb) {
  for (let i = 0; i < Array(parrentEl.children.length).length; i++) {
    cb(i);
  }
}

// Menu functions
function toggleMenu() {
  menuIcon.classList.toggle("close");
  menuLinks.classList.toggle("close");
}

menuIcon.addEventListener("click", toggleMenu);
menuLinks.addEventListener("click", toggleMenu);

// Auto-highlite toolbar
const toolbarHeight = 80;

function sethighliteMode(isHighlighted) {
  if (isHighlighted) {
    toolbar.classList.add("highlight");
  } else {
    toolbar.classList.remove("highlight");
  }
}

function toolbarHighliteHandler() {
  const pxFromTop = window.scrollY || window.pageYOffset;

  if (pxFromTop > toolbarHeight) {
    sethighliteMode(true);
  } else {
    sethighliteMode(false);
  }
}

// Carousel functions
let currentPage = 0;

setInterval(() => {
  if (currentPage == carouselContainer.children.length - 2) {
    pushSlide(0);
  } else {
    pushSlide(currentPage + 1);
  }
}, 3500);

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

// Auto-menu active link
const currentUrl = window.location.href;
const hashValue = currentUrl.split("#")[1];

if (hashValue) {
  setActiveLink(hashValue);
}

function autoMenuLinkActiveHandler() {
  sections.forEach((sectionEl, index) => {
    const position = sectionEl.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      setActiveLink(index);
    }
  });
}

function setActiveLink(index) {
  forEachChildOf(menuLinks, (i) => {
    ch(menuLinks, i).classList.remove("active");
  });
  ch(menuLinks, index).classList.add("active");
}

window.addEventListener("scroll", () => {
  toolbarHighliteHandler();
  autoMenuLinkActiveHandler();
});
