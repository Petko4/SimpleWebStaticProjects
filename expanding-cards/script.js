// const div = document.getElementById("container");

// div.addEventListener("click", (event) => {
//   [...div.children].forEach((child) => child.classList.remove("active"));
//   event.srcElement.classList.add("active");
// });

const panels = document.querySelectorAll(".panel");

panels.forEach((el) =>
  el.addEventListener("click", (event) => {
    removeActiveClass();
    el.classList.add("active");
  })
);

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
