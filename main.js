let icon = document.querySelector("ion-icon");
let menu = document.querySelector(".menu");

function stopProp(el) {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

document.addEventListener("click", function (e) {
  stopProp(menu);
  if (e.target == menu || e.target == icon) {
    document.querySelector(".menu").classList.toggle("hide");
  } else {
    document.querySelector(".menu").classList.add("hide");
  }
});

