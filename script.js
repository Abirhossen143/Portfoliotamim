let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
toggle.addEventListener("click", function () {
  if (toggle.firstElementChild.classList.contains("fa-bars")) {
    toggle.firstElementChild.classList.replace("fa-bars", "fa-times");
  } else {
    toggle.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
  sidebar.classList.toggle("show-sidebar");
});
