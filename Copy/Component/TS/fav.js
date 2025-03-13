let saved = document.querySelector(".saved")
let enlarge = document.querySelector("svg.enlarge");
let favourite = document.querySelector(".favourite");
let minimize = document.querySelector("svg.minimize");

saved.addEventListener("click", () => {
  if (favourite.classList.contains("open")){
    favourite.classList.remove("open");
    favourite.classList.remove("active");
  } else {
    favourite.classList.add("open");
  }
})

enlarge.addEventListener("click", () => {
  if (favourite.classList.contains("open")) {
    enlarge.classList.add("active")
    favourite.classList.add("active");
  } else {
    minimize.classList.add("active");
  }
});


// minimize.addEventListener("click", () => {
//   favourite.classList.remove("active");
// });
