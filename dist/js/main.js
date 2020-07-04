const menuIcon = document.getElementById("menuIcon");
const menuLinks = document.getElementById("menuLinks");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("close");
  menuLinks.classList.toggle("close");
});
